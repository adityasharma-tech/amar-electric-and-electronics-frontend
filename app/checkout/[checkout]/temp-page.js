"use client"
import axios from 'axios'
import Style from '../style'
import Loading from '@/app/(v1)/loading'
import Item from '@/app/(v1)/checkout/item'
import Navigation from '@/app/navigation'
import AddressList from '../address-list'
const orderid = require('order-id')('key')
import { useSession } from 'next-auth/react'
import React, { useState, useEffect } from 'react'
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { redirect, useRouter, useSearchParams } from 'next/navigation'
import { RadioGroup } from "@/components/ui/radio-group"
import AddressSkeleton from '@/components/skeleton/address'
import { useSelector, useDispatch } from 'react-redux';
import { setQuantity, setColor, setSize, setMaterial, setSlug } from '@/lib/slices/productSlice';
import CartProductSkeleton from '@/components/skeleton/cartProduct'
import CreateAddressSkeleton from '@/components/skeleton/create-address'
import { checkCodAvailability, ctdw, getCourierCharges } from '@/lib/utils'

const CartCheckout = ({ params }) => {
    /* Hooks */
    const { toast } = useToast()
    const router = useRouter()
    const { data: session, status } = useSession();
    const checkout = params.checkout

    /* React Redux toolkit */
    const { quantity, color, size, material, slug } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    /* usState Hooks */
    const [data, setData] = useState(null)
    const [products, setProducts] = useState([])
    const [creatingOrder, setCreatingOrder] = useState(false)
    const [productQty, setProductQty] = useState(1)
    const [processing, setProcessing] = useState(false)
    const [defaultAddress, setDefaultAddress] = useState(null)
    const [totalPrice, setTotalPrice] = useState(null)
    const [price, setPrice] = useState(null)
    const [offerPrice, setOfferPrice] = useState(null)
    const [shippingCost, setShippingCost] = useState(null)
    const [shipping_address, setShipping_address] = useState(null)
    const [cashMode, setCashMode] = useState(false)
    const [payByCard, setpayByCard] = useState(true)


    async function fetchUserData() {
        setProcessing(true)
        try {
            let response = await axios.get('/api/user/checkout/get')
            let res = await response.data
            let jsonString = atob(res.user)
            let user = JSON.parse(jsonString)
            setData(user)
            setShipping_address(user.address[0] || null)
            setDefaultAddress(user.address[0]?._id || null)
            // set data on the basis of the checkout type
            if (checkout === "cart") {
                const productsWithTotal = user.cart.map(product => ({
                    ...product,
                    total: product.pricing.price * product.quantity
                }));
                const total = productsWithTotal.reduce((sum, product) => sum + product.total, 0);
                setTotalPrice(total)
                const productsWithOffer = user.cart.map(product => ({
                    ...product,
                    total: product.pricing.offerPrice * product.quantity
                }));
                const cartOfferPrice = productsWithOffer.reduce((sum, product) => sum + product.total, 0)
                setOfferPrice(cartOfferPrice)
                const ctdw_data = ctdw(user?.cart)
                const fetch_courier_data = await getCourierCharges(824124, user.address[0]?.pincode || 0, ctdw_data.weight, cashMode ? 1 : 0, cartOfferPrice, ctdw_data.width, ctdw_data.length, ctdw_data.height)
                setShippingCost(fetch_courier_data?.data?.rates?.Basic?.surface?.cod_charges?.min)
                setPrice(cartOfferPrice + fetch_courier_data?.data?.rates?.Basic?.surface?.cod_charges?.min)
            } else {
                let response = await axios.get(`/api/public/product?slug=${slug || checkout}`)
                let res = await response.data
                setProducts([res.data])
                const productWithTotal = res.data.pricing.price * productQty
                setTotalPrice(productWithTotal)

                const productWithOffer = res.data.pricing.offerPrice * productQty
                setOfferPrice(productWithOffer)
                const ctdw_data = ctdw([res.data])
                const fetch_courier_data = await getCourierCharges(824124, user.address[0]?.pincode || 0, ctdw_data.weight, cashMode ? 1 : 0, productWithOffer, ctdw_data.width, ctdw_data.length, ctdw_data.height)
                setShippingCost(fetch_courier_data?.data?.rates?.Basic?.surface?.cod_charges?.min)
                setPrice(productWithOffer + fetch_courier_data?.data?.rates?.Basic?.surface?.cod_charges?.min)
                setPrice(productWithOffer + parseInt(fetch_courier_data?.data?.rates?.Basic?.surface?.cod_charges?.min))
            }
            setProcessing(false)
        } catch (error) {
            console.error(error)
            setProcessing(true)
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: `Error: ${error.message}`,
                action: <ToastAction onClick={() => router.push('/checkout/cart')} altText="Reload">Reload</ToastAction>,
            })
        }
    }
    const disableCheckout = (processing || !defaultAddress || price === null || price <= 0 || creatingOrder || price === NaN || shippingCost === null)

    async function placeOrder(pay) {
        setCreatingOrder(true)
        if (!shipping_address) {
            toast({
                title: "No address selected",
                description: "Please select a address to proceed",
                variant: "distructive"
            })
            setCreatingOrder(false)
            return
        }
        try {
            let fieldsToRemove = ['password', 'active', 'blocked', 'pincode', 'favorities', 'cart'];
            let newObject = Object.fromEntries(
                Object.entries(data).filter(([key, value]) => !fieldsToRemove.includes(key))
            )
            const p = products[0]
            const jsonString = JSON.stringify({
                orderId: orderid.generate().replace(/-/g, ''),
                user: newObject,
                address: shipping_address,
                phoneNumber: data.phoneNumber,
                achieved: false,
                status: [
                    { title: 'Order placed', status: "PENDING", description: '', color: "#fcdc00", date: new Date },
                ],
                products: checkout === "cart" ? data.cart : [{
                    availableQuantity: p.availableQuantity,
                    category: p.category,
                    id: p.id,
                    pricing: p.pricing,
                    quantity,
                    shipping: p.shipping,
                    slug: p.slug,
                    thumbnail: p.thumbnail,
                    title: p.title,
                    variation: {
                        size: size.trim() === "" ? null: size,
                        color: color.trim() === "" ? null: color,
                        material: material.trim() === "" ? null: material
                    }
                }],
                paymentMethod: pay ? "Prepaid" : "COD",
                transactionToken: null,
                paymentData: null,
                shippingCost,
                freeShipping: shippingCost === 0 ? true : false,
                offerPrice,
                totalPrice: price,
                payableAmount: price,
                currentStatus: "PENDING",
                createdAt: new Date(),
                updatedAt: new Date()
            })
            const base64String = btoa(jsonString)
            const response = await axios.post(`/api/user/checkout/order`, {
                data: base64String
            })
            const res = await response.data
            if (res.ok) {
                toast({
                    description: " Order has been placed successfully!",
                })
                router.push('/checkout/success')
            }
        } catch (error) {
            toast({
                type: "SUCCESS",
                title: "Failed to place order",
                description: `Error: ${error.message}`
            })
        }
    }

    const [cashEnable, setCashEnable] = useState(false)

    useEffect(()=>{
        const cod_available = checkCodAvailability(checkout === "cart" ? data?.cart : products)
        setCashEnable(cod_available)
    }, [products, data, checkout])

    useEffect(() => {
        if (status === "authenticated") {
            fetchUserData()
        }
    }, [status, cashMode])
    if (status === "loading") {
        return <div>
            <Navigation pageName="Checkout" menuList={[]} />
        </div>
    }

    if (!session) {
        redirect('/user')
    } else if (!data) {
        return <Loading />
    } else {
        return (
            <>
                <Style />
                <Navigation menuList={[]} pageName="Checkout" />
                <main className="fit">
                    <div className="pt-4 lg:pb-2 lg:py-5 mx-auto max-w-7xl px-0 md:px-3 w-full">
                        <div>
                            <div className="flex flex-col items-center justify-center flex-wrap w-full lg:pb-10">
                                <div className="w-full flex flex-col">
                                    <div className="w-full hidden md:block lg:pb-4">
                                        <div className="flex flex-col justify-start items-center w-fit">
                                            <div className="pb-px flex justify-between items-center px-2 md:px-14">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 24 24"
                                                    className="text-lg text-success-500"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path fill="none" d="M24 24H0V0h24v24z"></path>
                                                    <circle cx="12" cy="12" r="8"></circle>
                                                </svg>
                                                <div className="w-32 md:w-40 lg:w-96 mx-1 self-start pt-2">
                                                    <div className="rounded-full h-px w-full bg-gray-300"></div>
                                                </div>
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 24 24"
                                                    className="text-lg text-gray-300"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path fill="none" d="M24 24H0V0h24v24z"></path>
                                                    <circle cx="12" cy="12" r="8"></circle>
                                                </svg>
                                            </div>
                                            <div className="pb-2 flex justify-between items-center w-full px-10">
                                                <span className="Text_textXs__9xjYj Text_bold__lt4Nl">
                                                    Address
                                                </span>
                                                <span className="Text_textXs__9xjYj Text_bold__lt4Nl -mr-5">
                                                    Payment Details
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex space-x-0 items-center lg:items-start lg:space-x-6 flex-col lg:flex-row">
                                        <div className="flex-1 w-full lg:w-auto mb-6">
                                            <div className="px-1 md:px-0">
                                                {data ? <div className='px-3'>
                                                    <div className='flex'><span className='text-lg font-semibold text-gray-700 my-auto'>Your Address</span>{data.address.length > 0 && <button onClick={() => router.push("/user/address/new?goBack=true")} className='text-xs text-center font-semibold text-gray-700  ml-auto border rounded-lg px-3 py-2 flex py-auto my-auto'>+ Add Address</button>}</div>
                                                    <RadioGroup required={true} value={defaultAddress}>
                                                        {data.address.length > 0 ? data.address.map((i, index) => <AddressList onClick={() => { setDefaultAddress(i._id); setShipping_address(i) }} key={index} _id={i._id} onDelete={async () => {
                                                            let response = await fetch(`/api/user/data?deleteType=address&id=${i._id}`, {
                                                                method: "DELETE"
                                                            })
                                                            if (response.ok) {
                                                                fetchUserData()
                                                                toast({
                                                                    description: "Address Deleted",
                                                                })
                                                            } else {
                                                                toast({
                                                                    variant: "destructive",
                                                                    description: "Failed to delete",
                                                                })
                                                                fetchUserData()
                                                            }
                                                        }} fullName={i.fullName} flatOrBuilding={i.flatOrBuilding} areaOrStreet={i.areaOrStreet} townOrCity={i.townOrCity} state={i.state} pincode={i.pincode} phoneNumber={i.mobileNumber} />) : <CreateAddressSkeleton onPress={() => { router.push("/user/address/new") }} />}
                                                    </RadioGroup></div> : <><AddressSkeleton /><AddressSkeleton /></>}
                                            </div>
                                        </div>
                                        <div className="lg:pt-[44px] lg:sticky lg:top-[90px] flex justify-center mb-20">
                                            <div className="w-[400px] max-w-[100vw] px-3 md:px-0">
                                                <div>
                                                    <div>
                                                        <div
                                                            className="rounded-xl rounded-b-none py-2 flex justify-center items-center space-x-2"
                                                            style={{
                                                                background:
                                                                    "linear-gradient(90deg,rgb(255, 198, 55) 0%,rgb(255, 235, 4) 100%)",
                                                            }}
                                                        >
                                                            <img
                                                                src="https://store.pw.live/money.svg"
                                                                width="20"
                                                                height="20"
                                                                alt=""
                                                            />
                                                            <span className="Typography_small__10WKi font-bold Typography_root__TxCor">
                                                                <span className="text-primary">
                                                                    Cash On Delivery is Available.
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div className="fixed lg:hidden bg-white z-10 bottom-0 left-0 right-0 rounded-t-lg p-3 shadow-all-round-strong">
                                                            <div className="mb-3 pb-1 border-b border-b-gray-200">
                                                                <div>
                                                                    <div className="flex flex-row justify-between">
                                                                        <button
                                                                            disabled={disableCheckout || !cashEnable}
                                                                            onClick={() => {
                                                                                setCashMode(true);
                                                                                setpayByCard(false);
                                                                            }}
                                                                            className={`lg:cursor-pointer cursor-default ${creatingOrder ? "animate-pulse" : null}`}
                                                                        >
                                                                            <div className="flex gap-2 cursor-default lg:cursor-pointer w-full flex-row-reverse justify-between items-center">
                                                                                <span className="font-semibold Typography_root__TxCor">
                                                                                    <span className="text-primary">
                                                                                        <span className="text-primary">
                                                                                            Cash On Delivery
                                                                                        </span>
                                                                                    </span>
                                                                                </span>
                                                                                {!cashMode ? (
                                                                                    <div className="flex justify-center items-center transition-all duration-300 w-[18px] h-[18px] border-2 p-0.5 border-gray-400 rounded-full">
                                                                                        <div className="transition-all duration-300 rounded-full w-[0px] h-[0px]"></div>
                                                                                    </div>
                                                                                ) : (
                                                                                    <div className="flex justify-center items-center transition-all duration-300 w-[18px] h-[18px] border-2 p-0.5 border-indigo-500 rounded-full">
                                                                                        <div className="transition-all duration-300 rounded-full w-[100%] h-[100%] bg-indigo-500"></div>
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </button>
                                                                        <button
                                                                            disabled={disableCheckout}
                                                                            onClick={() => {
                                                                                setCashMode(false);
                                                                            }}
                                                                            className={`lg:cursor-pointer cursor-default ${creatingOrder ? "animate-pulse" : null}`}
                                                                        >
                                                                            <div className="flex gap-2 cursor-default lg:cursor-pointer w-full flex-row-reverse justify-between items-center">
                                                                                <span className="font-semibold Typography_root__TxCor">
                                                                                    <span className="text-primary">
                                                                                        <span className="text-primary">
                                                                                            Online Payment
                                                                                        </span>
                                                                                    </span>
                                                                                </span>
                                                                                {cashMode ? (
                                                                                    <div className="flex justify-center items-center transition-all duration-300 w-[18px] h-[18px] border-2 p-0.5 border-gray-400 rounded-full">
                                                                                        <div className="transition-all duration-300 rounded-full w-[0px] h-[0px]"></div>
                                                                                    </div>
                                                                                ) : (
                                                                                    <div className="flex justify-center items-center transition-all duration-300 w-[18px] h-[18px] border-2 p-0.5 border-indigo-500 rounded-full">
                                                                                        <div className="transition-all duration-300 rounded-full w-[100%] h-[100%] bg-indigo-500"></div>
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="space-x-2 flex">
                                                                <div className="flex-1">
                                                                    <span className="Typography_whitespaceNowrap__nm0U6 Typography_heading2__2HLSZ font-bold Typography_root__TxCor">
                                                                        <span className="text-primary">
                                                                            ₹{price}
                                                                        </span>
                                                                    </span>
                                                                    <div>
                                                                        <span className="text-sm underline text-blue font-semibold">
                                                                            View Price Details
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-[160px]">
                                                                    {!cashMode ? (
                                                                        <button
                                                                            disabled={disableCheckout}
                                                                            onClick={() => {
                                                                                setpayByCard(true);
                                                                            }}
                                                                            className={`Button_root__G_l9X Button_stretch__2Qe9q text-white lg:cursor-pointer cursor-default ${creatingOrder ? "animate-pulse" : null}`}
                                                                        >
                                                                            Pay ₹{price?.toLocaleString() ?? price}
                                                                        </button>
                                                                    ) :
                                                                        <button
                                                                            disabled={disableCheckout}
                                                                            onClick={() => placeOrder(false)}
                                                                            className={`Button_root__G_l9X Button_stretch__2Qe9q text-white lg:cursor-pointer cursor-default ${creatingOrder ? "animate-pulse" : null}`}
                                                                        >
                                                                            Place Order
                                                                        </button>
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rounded-b-xl p-4 lg:p-6 !pt-3 shadow-all-round pb-0 lg:pb-6 w-full transform mb-10 lg:mb-0">
                                                            <div className="pb-2 border-b mb-3">
                                                                <span className="Typography_heading6__f9EKE font-bold Typography_root__TxCor">
                                                                    <span className="text-primary">
                                                                        Order Details
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div className="pb-2 mb-3 lg:max-h-[200px] lg:overflow-y-auto lg:pr-2">
                                                                {checkout === "cart" ?
                                                                    data?.cart.map((item) => <Item
                                                                        key={item.id}
                                                                        slug={item.slug}
                                                                        setProcessing={setProcessing}
                                                                        name={item.title}
                                                                        refreshData={fetchUserData}
                                                                        collection={item.category.title}
                                                                        variations={item.variation}
                                                                        pricing={item.pricing}
                                                                        quantity={item.quantity}
                                                                        thumbnail={item.thumbnail}
                                                                    />)
                                                                    : processing ? <CartProductSkeleton/> : <Item
                                                                        slug={slug}
                                                                        setProcessing={setProcessing}
                                                                        name={products[0].title}
                                                                        refreshData={fetchUserData}
                                                                        collection={products[0].category.title}
                                                                        variations={{
                                                                            color: color.trim() === "" ? null : color,
                                                                            size: size.trim() === "" ? null : size,
                                                                            material: material.trim() === "" ? null : material 
                                                                        }}
                                                                        pricing={products[0].pricing}
                                                                        quantity={quantity}
                                                                        thumbnail={products[0].thumbnail}
                                                                    />
                                                                }
                                                            </div>
                                                            <div className="pb-3 flex justify-between space-x-2">
                                                                <span className="font-medium Typography_root__TxCor">
                                                                    <span className="text-primary">
                                                                        Products Total ({products.length} Items)
                                                                    </span>
                                                                </span>
                                                                <span className="Typography_whitespaceNowrap__nm0U6 Typography_heading7__gujRQ font-semibold Typography_root__TxCor">
                                                                    <span className="text-primary">
                                                                        ₹{offerPrice}
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            {shippingCost && <div className='flex mb-2'>
                                                                <div className='w-1/2 font-medium text-gray-700'>Shipping Cost:</div>
                                                                <div className={`w-1/2 text-right font-bold ${shippingCost === 0 ? 'text-green-600' : 'text-gray-700'}`}>{shippingCost === 0 ? "Free" : `₹${shippingCost}`}</div>
                                                            </div>}
                                                            {(((totalPrice - offerPrice) / totalPrice) * 100) > 0 ? <div className='flex'>
                                                                <div className='w-1/2 font-medium text-gray-700'>Discount:</div>
                                                                <div className='w-1/2 text-right font-bold text-green-700'>{Math.floor(((totalPrice - offerPrice) / totalPrice) * 100)}%</div>
                                                            </div> : null}
                                                            <div className="pb-3 pt-2.5 flex justify-between border-t space-x-2">
                                                                <span className="Typography_heading7__gujRQ font-medium Typography_root__TxCor">
                                                                    <span className="text-primary">
                                                                        Total Amount
                                                                    </span>
                                                                </span>
                                                                <span className="Typography_whitespaceNowrap__nm0U6 Typography_heading6__f9EKE font-bold Typography_root__TxCor">
                                                                    <span className="text-primary">
                                                                        ₹{price?.toLocaleString() ?? price}
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div className="w-full hidden lg:block">
                                                                <div className="mb-3">
                                                                    <div>
                                                                        <div className="flex flex-row justify-between">
                                                                            <button
                                                                                disabled={disableCheckout || !cashEnable}
                                                                                onClick={() => {
                                                                                    setCashMode(true);
                                                                                    setpayByCard(false);
                                                                                }}
                                                                            >
                                                                                <div className="flex gap-2 cursor-default lg:cursor-pointer w-full flex-row-reverse justify-between items-center">
                                                                                    <span className="font-semibold Typography_root__TxCor">
                                                                                        <span className="text-primary">
                                                                                            <span className="text-primary pc">
                                                                                                Cash On Delivery
                                                                                            </span>
                                                                                        </span>
                                                                                    </span>
                                                                                    {!cashMode && (
                                                                                        <div className="flex justify-center items-center transition-all duration-300 w-[18px] h-[18px] border-2 p-0.5 border-gray-400 rounded-full">
                                                                                            <div className="transition-all duration-300 rounded-full w-[0px] h-[0px]"></div>
                                                                                        </div>
                                                                                    )}
                                                                                    {cashMode && (
                                                                                        <div className="flex justify-center items-center transition-all duration-300 w-[18px] h-[18px] border-2 p-0.5 border-indigo-500 rounded-full">
                                                                                            <div className="transition-all duration-300 rounded-full w-[100%] h-[100%] bg-indigo-500"></div>
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                            </button>
                                                                            <button
                                                                                disabled={disableCheckout}
                                                                                onClick={() => {
                                                                                    setCashMode(false);
                                                                                }}
                                                                            >
                                                                                <div className="flex gap-2 cursor-default lg:cursor-pointer w-full flex-row-reverse justify-between items-center">
                                                                                    <span className="font-semibold Typography_root__TxCor">
                                                                                        <span className="text-primary">
                                                                                            <span className="text-primary">
                                                                                                Online Payment
                                                                                            </span>
                                                                                        </span>
                                                                                    </span>
                                                                                    {cashMode && (
                                                                                        <div className="flex justify-center items-center transition-all duration-300 w-[18px] h-[18px] border-2 p-0.5 border-gray-400 rounded-full">
                                                                                            <div className="transition-all duration-300 rounded-full w-[0px] h-[0px]"></div>
                                                                                        </div>
                                                                                    )}
                                                                                    {!cashMode && (
                                                                                        <div className="flex justify-center items-center transition-all duration-300 w-[18px] h-[18px] border-2 p-0.5 border-indigo-500 rounded-full">
                                                                                            <div className="transition-all duration-300 rounded-full w-[100%] h-[100%] bg-indigo-500"></div>
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {cashMode && (
                                                                    <button
                                                                        disabled={disableCheckout}
                                                                        onClick={() => {
                                                                            placeOrder()
                                                                        }}
                                                                        className="Button_root__G_l9X Button_stretch__2Qe9q text-white lg:cursor-pointer cursor-default"
                                                                    >
                                                                        Place Order
                                                                    </button>
                                                                )}
                                                                {!cashMode && (
                                                                    <button
                                                                        disabled={disableCheckout}
                                                                        // onClick={() => placeOrder(false)}
                                                                        className="Button_root__G_l9X Button_stretch__2Qe9q text-white lg:cursor-pointer cursor-default"
                                                                    >
                                                                        Pay ₹{price?.toLocaleString() ?? price}
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </>
        )
    }
}

export default CartCheckout
