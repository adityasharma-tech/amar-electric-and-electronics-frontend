"use client";
import React from "react";
import axios from "axios";
import Loading from "@/app/(v1)/loading";
import Navigation from "@/app/navigation";
const orderid = require("order-id")("key");
import { useSession } from "next-auth/react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { redirect, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setQuantity } from "@/lib/slices/productSlice";
import { checkCodAvailability, ctdw } from "@/lib/utils";
import {
  createOrder,
  getCourierCharges
} from "@/lib/actions";
import CardContent, { CardFooter } from "./card";
import Select from "./select";
import Address from "./address";
import Popup from "./popup";
import CheckoutProductView from "./productView";
import { siteConfig } from "@/config/site";
import { load } from "@cashfreepayments/cashfree-js";

export default function CheckoutPage({ params }) {
  /* Hooks */
  const router = useRouter();
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { data: session, status } = useSession();
  const { quantity, color, size, material, slug } = useSelector(
    (state) => state.product
  );
  const { desktop_mode } = useSelector((state) => state.app);

  const checkout = params.checkout;

  /* State Variables */
  const [data, setData] = React.useState(null);
  const [products, setProducts] = React.useState([]);
  const [creatingOrder, setCreatingOrder] = React.useState(false);
  const [processing, setProcessing] = React.useState(false);

  const [pricing, setPricing] = React.useState({
    price: 0,
    original_price: 0,
    offer_price: 0,
    shipping_charge: 0,
  });

  const [shipping_address, set_shipping_address] = React.useState(null);
  const [single_product_qty, set_single_product_qty] = React.useState(1);
  const [paymentMode, setPaymentMode] = React.useState("prepaid");
  const [CODavailable, setCODavailable] = React.useState(false);
  const [currentPrepaidMode, setcurrentPrepaidMode] =
    React.useState("prepaid:card");

  const [create_new_address, set_create_new_address] = React.useState(false);
  async function fetchUserData() {
    setProcessing(true);
    try {
      let response = await axios.get("/api/user/checkout/get");
      let res = await response.data;
      let jsonString = atob(res.user);
      let user = JSON.parse(jsonString);
      setData(user);
      set_shipping_address(user.address[0] || null);

      // set data on the basis of the checkout variant
      if (checkout === "cart") {
        const productsWithTotal = user.cart.products.map((product) => ({
          ...product,
          total: product.product.pricing.price * product.product.quantity,
        }));
        const total = productsWithTotal.reduce(
          (sum, product) => sum + product.total,
          0
        );
        const productsWithOffer = user.cart.products.map((product) => ({
          ...product,
          total: product.product.pricing.offerPrice * product.quantity,
        }));
        const cartOfferPrice = productsWithOffer.reduce(
          (sum, product) => sum + product.total,
          0
        );
        const ctdw_data = ctdw(user.cart.products);
        const fetch_courier_data = await getCourierCharges(
          process.env.NEXT_PUBLIC_WAREHOUSE_PINCODE,
          user.address[0]?.pincode || 0,
          ctdw_data.weight,
          paymentMode === "COD" ? 1 : 0,
          cartOfferPrice,
          ctdw_data.width,
          ctdw_data.length,
          ctdw_data.height
        );
        console.log("COURIER_DATA", fetch_courier_data);
        const shipping_charge = parseFloat(
          fetch_courier_data?.data?.rates?.Basic?.surface?.cod_charges?.min
        );
        console.log({
          shipping_charge,
          price: cartOfferPrice + shipping_charge,
          offer_price: cartOfferPrice,
          original_price: total,
        });
        if (fetch_courier_data.status === 404) {
          toast({
            title: "Uh oh! Something went wrong.",
            description: fetch_courier_data.message,
            variant: "destructive",
          });
          setProcessing(true);
          setPricing({
            ...pricing,
            shipping_charge: 60,
            price: cartOfferPrice + 60,
            offer_price: cartOfferPrice,
            original_price: total,
          });
        } else {
          setProcessing(false);
          setPricing({
            ...pricing,
            shipping_charge,
            price: cartOfferPrice + shipping_charge,
            offer_price: cartOfferPrice,
            original_price: total,
          });
        }
      } else {
        let response = await axios.get(
          `/api/public/product?slug=${
            slug || checkout
          }&populate=thumbnail,category`
        );
        let res = await response.data;
        setProducts([res.data]);
        const productWithTotal = res.data.pricing.price * single_product_qty;
        const productWithOffer =
          res.data.pricing.offerPrice * single_product_qty;
        console.log("2", res.data);
        const ctdw_data = ctdw([res.data], true);
        const fetch_courier_data = await getCourierCharges(
          process.env.NEXT_PUBLIC_WAREHOUSE_PINCODE,
          user.address[0]?.pincode || 0,
          ctdw_data.weight,
          paymentMode === "COD" ? 1 : 0,
          productWithOffer,
          ctdw_data.width,
          ctdw_data.length,
          ctdw_data.height
        );

        const shipping_charge = parseFloat(
          fetch_courier_data?.data?.rates?.basic?.surface?.cod_charges?.min
        );
        console.log(
          "COURIER",
          process.env.NEXT_PUBLIC_WAREHOUSE_PINCODE,
          user.address[0]?.pincode || 0,
          ctdw_data.weight,
          paymentMode === "COD" ? 1 : 0,
          productWithOffer,
          ctdw_data.width,
          ctdw_data.length,
          ctdw_data.height
        );
        console.log("SHIPPING", {
          shipping_charge,
          price: (productWithOffer + shipping_charge) * quantity,
          offer_price: productWithOffer * quantity,
          original_price: productWithTotal * quantity,
        });
        if (fetch_courier_data.status === 404) {
          toast({
            title: "Uh oh! Something went wrong.",
            description: fetch_courier_data.message,
            variant: "destructive",
          });
          setProcessing(true);
          setPricing({
            ...pricing,
            shipping_charge: 60,
            price: productWithOffer * quantity,
            offer_price: productWithOffer * quantity,
            original_price: productWithTotal * quantity,
          });
        } else {
          setProcessing(false);
          setPricing({
            ...pricing,
            shipping_charge,
            price: (productWithOffer + shipping_charge) * quantity,
            offer_price: productWithOffer * quantity,
            original_price: productWithTotal * quantity,
          });
        }
      }
      setProcessing(false);
    } catch (error) {
      console.error(error);
      setProcessing(true);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `Error: ${error.message}`,
        action: (
          <ToastAction
            onClick={() => router.push("/checkout/cart")}
            altText="Reload"
          >
            Refresh
          </ToastAction>
        ),
      });
    }
  }

  React.useEffect(() => {
    console.log(pricing);
  }, [pricing]);

  React.useEffect(() => {
    if (checkout !== "cart" && products[0] && products[0].pricing) {
      setProcessing(true);
      setPricing({
        ...pricing,
        price:
          products[0]?.pricing?.offerPrice * quantity + pricing.shipping_charge,
        offer_price: products[0]?.pricing?.offerPrice,
        original_price: products[0].pricing?.price,
      });
      setProcessing(false);
    }
  }, [quantity]);
  const order_id = orderid.generate().replace(/-/g, "");
  /* Place Order (start) */
  async function placeOrder() {
    setCreatingOrder(true);
    if (!shipping_address) {
      toast({
        title: "No address selected",
        description: "Please select a address to proceed",
        variant: "destructive",
      });
      setCreatingOrder(false);
      return null;
    }
    try {
      const p = products[0];
      const jsonString = JSON.stringify({
        orderId: order_id,
        user: data._id.toString(),
        address: shipping_address._id.toString(),
        phoneNumber: data.phoneNumber,
        achieved: false,
        status: [
          {
            title: "Order placed",
            status: "pending",
            description: "",
            colorstamp: "#fcdc00",
            timestamp: new Date(),
          },
        ],
        products:
          checkout === "cart"
            ? data.cart.products.map((i) => ({
                product: i._id.toString(),
                quantity: i.quantity,
                price: i.price,
                variations: i.variations,
              }))
            : [
                {
                  product: p._id.toString(),
                  quantity,
                  price: p.pricing.offerPrice,
                  variations: p.variations,
                },
              ],
        paymentMethod: paymentMode,
        paymentData: null,
        pricing: {
          total: pricing.offer_price,
          shipping: pricing.shipping_charge,
          grandTotal: pricing.price,
        },
        payableAmount: pricing.price,
        currentStatus: "pending",
      });
      const base64String = btoa(jsonString);
      const response = await axios.post(`/api/user/checkout/order`, {
        data: base64String,
      });
      const res = await response.data;
      if (res.ok) {
        toast({
          description: "Order has been placed successfully!",
        });
        router.push("/checkout/success");
      } else {
        toast({
          description: "Failed to make order.",
        });
      }
    } catch ({ message }) {
      toast({
        variant: "distructive",
        title: "Failed to place order",
        description: `Error: ${message}`,
      });
    }
  }
  /* Place Order (end) */
  /* Action Variables */
  const ACTION_ADDRESS = "address_select";
  const ACTION_PAYMENT_METHOD = "payment_method";
  const ACTION_REVIEW = "review_products&payment";

  const [current_action, set_current_action] = React.useState(ACTION_ADDRESS);
  const disableCheckout =
    processing ||
    !shipping_address ||
    pricing.price === null ||
    pricing.price <= 0 ||
    creatingOrder ||
    pricing.price === NaN ||
    pricing.shipping_charge === null ||
    current_action != ACTION_REVIEW;

  React.useEffect(() => {
    const cod_available = checkCodAvailability(
      checkout === "cart" ? data?.cart?.products ?? [] : products,
      checkout === "cart" ? false : true
    );
    setCODavailable(cod_available);
  }, [products, data, checkout]);

  async function fetchShippingCharges() {
    const ctdw_data = ctdw(
      checkout === "cart" ? data?.cart?.products : products,
      checkout === "cart" ? false : true
    );
    const fetch_courier_data = await getCourierCharges(
      process.env.NEXT_PUBLIC_WAREHOUSE_PINCODE,
      shipping_address?.pincode || 0,
      ctdw_data.weight,
      paymentMode === "COD" ? 1 : 0,
      pricing.offer_price,
      ctdw_data.width,
      ctdw_data.length,
      ctdw_data.height
    );
    if (fetch_courier_data.status === 404)
      toast({ title: fetch_courier_data.message, variant: "destructive" });
    else toast({ title: "Shipping Address Changed" });
    const shipping_charge = parseFloat(
      fetch_courier_data?.data?.rates?.Basic?.surface?.cod_charges?.min
    );

    setPricing({
      ...pricing,
      shipping_charge,
      price: pricing.offer_price + shipping_charge,
    });
  }

  React.useEffect(() => {
    if (status != "authenticated" && data && products) fetchShippingCharges();
  }, [shipping_address, paymentMode, status]);

  async function payAndPlaceOrder() {
    let paymentSessionId = "";
    const createOrderData = await createOrder(
      {
        order_id: `order_${order_id}`,
        order_amount: pricing.price,
        order_currency: "INR",
        order_note: "Additional order info",
        customer_details: {
          customer_id: data.phoneNumber,
          customer_name: shipping_address.fullName,
          customer_email: `user+${data.phoneNumber}@adityasharma.tech`,
          customer_phone: data.phoneNumber,
        },
        order_meta: {
          notify_url: `${process.env.NEXT_PUBLIC_HOST_URI}/webhook/order/${order_id}`,
        },
      },
      {
        orderId: order_id,
        user: data._id.toString(),
        address: shipping_address._id.toString(),
        phoneNumber: data.phoneNumber,
        achieved: false,
        status: [
          {
            title: "Order placed",
            status: "pending",
            description: "",
            colorstamp: "#fcdc00",
            timestamp: new Date(),
          },
        ],
        products:
          checkout === "cart"
            ? data.cart.products.map((i) => ({
                product: i.product._id.toString(),
                quantity: i.quantity,
                price: i.price,
                variations: i.variations,
              }))
            : [
                {
                  product: products[0]._id.toString(),
                  quantity,
                  price: products[0].pricing.offerPrice,
                  variations: products[0].variations,
                },
              ],
        paymentMethod: paymentMode,
        paymentData: null,
        pricing: {
          total: pricing.offer_price,
          shipping: pricing.shipping_charge,
          grandTotal: pricing.price,
        },
        payableAmount: pricing.price,
        currentStatus: "pending",
      }
    );

    paymentSessionId = await createOrderData.payment_session_id;

    const cashfree = await load({
      mode: process.env.NEXT_PUBLIC_CASHFREE_MODE,
    });
    let checkoutOptions = {
      paymentSessionId,
      returnUrl: `${process.env.NEXT_PUBLIC_HOST_URI}/checkout/success?order_id={order_id}`,
      // redirectTarget: "_framename_",
    };
    cashfree.checkout(checkoutOptions).then(function (result) {
      if (result.error) {
        alert(result.error.message);
      }
      console.log(result);
      if (result.redirect) {
        console.log("Redirection");
      }
    });
  }

  function PaySection({ wrap }) {
    return (
      <div id="pay_section" className="w-full px-5">
        <div
          className={`w-full px-4 py-4 bg-zinc-50 rounded-xl border ${
            wrap ? null : "md:flex flex-row"
          }`}
        >
          <div className="md:w-[70%]">
            <button
              onClick={() => {
                if (paymentMode === "prepaid") payAndPlaceOrder();
                else if (paymentMode === "COD") placeOrder();
              }}
              disabled={disableCheckout}
              type="button"
              style={{ boxShadow: `0px 0px 4px rgb(253 224 71 /1)` }}
              className="flex px-2.5 text-sm font-medium rounded-xl disabled:opacity-60 py-1.5 bg-yellow-400 ring-1 ring-yellow-300"
            >
              {paymentMode
                ? paymentMode === "prepaid"
                  ? "Place Your Order and Pay"
                  : "Place Your Order (COD)"
                : "Place Your Order and Pay"}
            </button>
            <h4 className="text-sm my-2 text-gray-500 font-normal">
              You'll be securely redirected to complete your purchase.
            </h4>
          </div>
          <div className="w-full flex px-3 flex-col">
            <span className="mt-auto font-semibold text-red-700 text-lg">
              Order Total: ₹{pricing.price?.toLocaleString() ?? pricing.price}
            </span>
            <span className="font-medium text-gray-700 text-sm">
              Shipping Cost: ₹
              {pricing.shipping_charge?.toLocaleString() ??
                pricing.shipping_charge}{" "}
              (Included)
            </span>
            <span className="mb-auto text-xs">
              By placing your order, you agree to {siteConfig.name}'s{" "}
              <a target="_blank" href="/privacyPolicy" className="text-blue-500">
                privary notice andcondition of use.
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }

  React.useLayoutEffect(() => {
    if (status === "authenticated") {
      fetchUserData();
    }
  }, [status, paymentMode]);

  if (status === "loading") {
    return (
      <React.Fragment>
        <Navigation pageName="Checkout" />
      </React.Fragment>
    );
  }

  if (!session) {
    redirect("/user");
  } else if (!data) {
    return <Loading />;
  } else {
    return (
      <React.Fragment>
        <style>{`
                  .bottom-bar {
                    display: none
                  }
                body::-webkit-scrollbar-thumb {
                    display: none;
                  }
                  
                  `}</style>
        <Navigation pageName="Checkout" />
        <Popup
          closed={!create_new_address}
          onClose={() => {
            set_create_new_address(false);
            fetchUserData();
          }}
        />
        <main className="md:h-[95vh] h-full md:overflow-y-hidden w-full flex flex-col xl:flex-row lg:flex-row md:flex-row p-5">
          <section
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#888 #f5f5f5",
            }}
            className="md:w-2/3 w-full custom-scrollbar h-full overflow-y-auto flex flex-col gap-y-3"
          >
            <Select
              unselected_content={
                shipping_address &&
                current_action != ACTION_ADDRESS && (
                  <Address
                    selected={true}
                    onClick={() => {}}
                    fullName={shipping_address.fullName}
                    flatOrBuilding={shipping_address.flatOrBuilding}
                    areaOrStreet={shipping_address.areaOrStreet}
                    townOrCity={shipping_address.townOrCity}
                    state={shipping_address.state}
                    pincode={shipping_address.pincode}
                    phoneNumber={shipping_address.mobileNumber}
                  />
                )
              }
              id={1}
              action={ACTION_ADDRESS}
              title="Select a delivery address"
              currentAction={current_action}
              setSelected={(value) => set_current_action(value)}
            >
              <CardContent title="Your addresses">
                <div className="flex flex-col gap-y-2 my-2">
                  {data?.address
                    ? data.address.map((i) => (
                        <Address
                          selected={
                            shipping_address?._id
                              ? shipping_address._id === i._id
                              : null
                          }
                          onClick={() => set_shipping_address(i)}
                          fullName={i.fullName}
                          flatOrBuilding={i.flatOrBuilding}
                          areaOrStreet={i.areaOrStreet}
                          townOrCity={i.townOrCity}
                          state={i.state}
                          pincode={i.pincode}
                          phoneNumber={i.mobileNumber}
                        />
                      ))
                    : null}
                </div>
                <button
                  onClick={() => set_create_new_address(true)}
                  type="button"
                  className="text-sm flex flex-row lg:cursor-pointer cursor-default"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    className="w-6 h-6 stroke-slate-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>{" "}
                  <span className="text-blue-800 my-auto">
                    Add a new address
                  </span>
                </button>
              </CardContent>
              <CardFooter
                onSubmit={() => set_current_action(ACTION_PAYMENT_METHOD)}
                disabled={
                  data.address.length <= 0 ||
                  !shipping_address ||
                  current_action != ACTION_ADDRESS ||
                  !paymentMode
                }
                btn_title="Use this address"
              />
            </Select>
            <Select
              unselected_content={
                current_action != ACTION_PAYMENT_METHOD ? (
                  paymentMode === "prepaid" ? (
                    <div className="flex flex-col px-2">
                      <span className="text-sm text-left">Online payment</span>
                      <span className={`text-xs text-left`}>
                        Credit or debit card / Net Banking / Other UPI Method /
                        EMI
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col px-2">
                      {/* <span className="text-sm text-left">
                        Cash on Delivery/Pay on Delivery
                      </span> */}
                      <span
                        className={`text-xs text-left ${
                          CODavailable ? "hidden" : null
                        }`}
                      >
                        Unavailable for this payment
                      </span>
                    </div>
                  )
                ) : null
              }
              disabled={!shipping_address}
              id={2}
              action={ACTION_PAYMENT_METHOD}
              title="Payment method"
              currentAction={current_action}
              setSelected={(value) => set_current_action(value)}
            >
              <CardContent className="gap-y-2" title="Payment method">
                <div className="flex flex-col w-full gap-y-2">
                  {/* <button
                    disabled={!CODavailable}
                    onClick={() => setPaymentMode("COD")}
                    className="flex flex-row gap-y-3 w-full"
                  >
                    {paymentMode != "COD" ? (
                      <div className="flex my-auto justify-center items-center transition-all duration-300 w-[18px] h-[18px] border-2 p-0.5 border-gray-400 rounded-full">
                        <div className="transition-all duration-300 rounded-full w-[0px] h-[0px]"></div>
                      </div>
                    ) : (
                      <div className="flex my-auto justify-center items-center transition-all duration-300 w-[18px] h-[18px] border-2 p-0.5 border-gray-800 rounded-full">
                        <div className="transition-all duration-300 rounded-full w-[100%] h-[100%] bg-gray-800"></div>
                      </div>
                    )}
                    <div className="flex flex-col px-2">
                      <span className="text-sm text-left">
                        Cash on Delivery/Pay on Delivery
                      </span>
                      <span
                        className={`text-xs text-left ${
                          CODavailable ? "hidden" : null
                        }`}
                      >
                        Unavailable for this payment
                      </span>
                    </div>
                  </button> */}
                  <button
                    onClick={() => setPaymentMode("prepaid")}
                    className="flex flex-row gap-y-3 w-full"
                  >
                    {paymentMode != "prepaid" ? (
                      <div className="flex my-auto justify-center items-center transition-all duration-300 w-[18px] h-[18px] border-2 p-0.5 border-gray-400 rounded-full">
                        <div className="transition-all duration-300 rounded-full w-[0px] h-[0px]"></div>
                      </div>
                    ) : (
                      <div className="flex my-auto justify-center items-center transition-all duration-300 w-[18px] h-[18px] border-2 p-0.5 border-gray-800 rounded-full">
                        <div className="transition-all duration-300 rounded-full w-[100%] h-[100%] bg-gray-800"></div>
                      </div>
                    )}
                    <div className="flex flex-col px-2">
                      <span className="text-sm text-left">Online payment</span>
                      <span className={`text-xs text-left`}>
                        Credit or debit card / Net Banking / Other UPI Method /
                        EMI
                      </span>
                    </div>
                    <img
                      className="h-6 my-auto ml-auto hidden md:hidden"
                      src="/razorpay-logo.png"
                    />
                  </button>
                </div>
              </CardContent>
              <CardFooter
                onSubmit={() => set_current_action(ACTION_REVIEW)}
                disabled={
                  !shipping_address || current_action != ACTION_PAYMENT_METHOD
                }
                btn_title="Use this payment method"
              />
            </Select>
            <Select
              expandable={false}
              id={3}
              action={ACTION_REVIEW}
              title="Review items and delivery"
              currentAction={current_action}
              setSelected={(value) => set_current_action(value)}
            >
              <div className="w-full px-3 py-3 rounded-xl border">
                <div className="flex flex-col w-full">
                  <h3 className="text-base font-medium text-left">
                    {/* Estimated delivery: 13 Oct 2023 - 14 Oct 2023 */}
                  </h3>
                  <span className="text-xs text-gray-500">
                    Items dispached by {siteConfig.name}
                  </span>
                </div>
                {checkout === "cart"
                  ? data.cart.products.map((p, idx) => (
                      <CheckoutProductView
                        key={idx}
                        pricing={p.product.pricing}
                        title={p.product.title}
                        thumbnail={p.product.thumbnail}
                      />
                    ))
                  : products.map((p, idx) => (
                      <CheckoutProductView
                        key={idx}
                        pricing={p.pricing}
                        availableQty={p.availableQty}
                        quantity={quantity}
                        setQuantity={(value) => dispatch(setQuantity(value))}
                        single={true}
                        title={p.title}
                        thumbnail={p.thumbnail}
                      />
                    ))}
              </div>
            </Select>
            {desktop_mode && <PaySection />}
          </section>
          <section className="xl:w-1/3 lg:w-1/3 md:w-1/3 w-full h-full">
            <PaySection wrap={true} />
          </section>
        </main>
      </React.Fragment>
    );
  }
}
