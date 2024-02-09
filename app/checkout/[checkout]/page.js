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
import { createOrder, getCourierCharges } from "@/lib/actions";
import CardContent, { CardFooter } from "./card";
import Select from "./select";
import Address from "./address";
import Popup from "./popup";
import CheckoutProductView from "./productView";
import { siteConfig } from "@/config/site";
import { load } from "@cashfreepayments/cashfree-js";

export default function CheckoutPage({ params }) {
  // Hooks
  const router = useRouter();
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { data: session, status } = useSession();
  const { quantity } = useSelector((state) => state.product);
  const { desktop_mode: desktopMode } = useSelector((state) => state.app);

  // Variables
  const checkoutType = params.checkout;
  const paymentMode = "prepaid";

  const [pricing, setPricing] = React.useState({
    price: 0, // Price to be paid ( offerPrice + shippingCharges )
    originalPrice: 0, // Price of pricing ( Not to paid )
    offerPrice: 0, // Price to be sold ( To be paid )
    shippingCharge: 0, // Shipping Charges
  });

  const [userData, setUserData] = React.useState(null);
  const [productsToSold, setProductsToSold] = React.useState([]);
  const [isProcessingData, setIsProcessingData] = React.useState(false); // Processing state of the data [boolean]
  const [shippingAddress, setShippingAddress] = React.useState(null); // Address where to order will place [null || object]
  const [createNewAddress, setCreateNewAddress] = React.useState(false); // Create New Address Dialog [boolean]

  async function fetchUserData() {
    setIsProcessingData(true);
    try {
      /* Fetching user data */
      let response = await axios.get("/api/user/checkout/get");
      let res = await response.data;
      let jsonString = atob(res.user);
      let user = JSON.parse(jsonString);
      setUserData(user);
      setProductsToSold(user.cart.products);
      setShippingAddress(user.address[0] || null);

      /* Processing checkout data  */
      // Checkout Type: Cart
      if (checkoutType === "cart") {
        // Calculating the orignal price (Not to paid)
        const productsWithTotal = user.cart.products.map((product) => ({
          ...product,
          total: product.product.pricing.price * product.quantity,
        }));
        const totalOriginalPrice = productsWithTotal.reduce(
          (sum, product) => sum + product.total,
          0
        );

        // Calculating the price (To be paid)
        const productsWithOffer = user.cart.products.map((product) => ({
          ...product,
          offerPrice: product.product.pricing.offerPrice * product.quantity,
        }));
        const totalOfferPrice = productsWithOffer.reduce(
          (sum, product) => sum + product.offerPrice,
          0
        );

        // Calculating the total Weightage and dimensions
        const weightAndDimensionsData = ctdw(user.cart.products);
        const calculatedShippingCost = await getCourierCharges(
          process.env.NEXT_PUBLIC_WAREHOUSE_PINCODE,
          user.address[0] ? user.address[0].pincode : 0,
          weightAndDimensionsData.weight,
          0,
          totalOfferPrice,
          weightAndDimensionsData.width,
          weightAndDimensionsData.length,
          weightAndDimensionsData.height
        );

        setPricing({
          price: totalOfferPrice + calculatedShippingCost,
          originalPrice: totalOriginalPrice,
          offerPrice: totalOfferPrice,
          shippingCharge: calculatedShippingCost,
        });
      }
      // Checkout Type: Product
      else {
        let response = await axios.get(
          `/api/public/product?slug=${checkoutType}&populate=thumbnail,category`
        );
        let res = await response.data;
        const products = [
          {
            product: res.data,
            quantity: quantity,
            price: res.data.pricing.offerPrice,
            variations: [],
          },
        ];

        const weightAndDimensionsData = ctdw(products);
        const calculatedShippingCost = await getCourierCharges(
          process.env.NEXT_PUBLIC_WAREHOUSE_PINCODE,
          user.address[0] ? user.address[0].pincode : 0,
          weightAndDimensionsData.weight,
          0,
          products,
          weightAndDimensionsData.width,
          weightAndDimensionsData.length,
          weightAndDimensionsData.height
        );

        setProductsToSold(products);
        setPricing({
          price:
            res.data.pricing.offerPrice * quantity + calculatedShippingCost,
          originalPrice: res.data.pricing.price,
          offerPrice: res.data.pricing.offerPrice,
          shippingCharge: calculatedShippingCost,
        });
      }
    } catch (err) {
      console.error(error);
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
    } finally {
      setIsProcessingData(false);
    }
  }

  React.useEffect(() => {
    if (checkoutType != "cart" && userData) {
      setIsProcessingData(true);
      setPricing({
        ...pricing,
        price: pricing.offerPrice * quantity,
      });
      setIsProcessingData(false);
    }
  }, [quantity, userData]);

  const ACTION_ADDRESS = "address_select";
  const ACTION_PAYMENT_METHOD = "payment_method";
  const ACTION_REVIEW = "review_products&payment";

  const [currentAction, setCurrentAction] = React.useState(ACTION_ADDRESS);
  const disableCheckout =
    isProcessingData ||
    !shippingAddress ||
    pricing.price === null ||
    pricing.price <= 0 ||
    pricing.price === NaN ||
    pricing.shippingCharge === null ||
    currentAction != ACTION_REVIEW;


  async function fetchShippingCharges() {
    return
  }

  React.useEffect(()=>{
    if(status == "authenticated") fetchShippingCharges()
  }, [shippingAddress, status])

  const order_id = orderid.generate().replace(/-/g, "");

  async function payAndPlaceOrder() {
    let paymentSessionId = "";
    const orderData = await createOrder(
      {
        order_id: `order_${order_id}`,
        order_amount: 1,//pricing.price,
        order_currency: "INR",
        order_note: "No Additional order info",
        customer_details: {
          customer_id: userData.phoneNumber,
          customer_name: shippingAddress.fullName,
          customer_email: `user+${userData.phoneNumber}@adityasharma.tech`,
          customer_phone: shippingAddress.mobileNumber,
        },
        order_meta: {
          notify_url: `${process.env.NEXT_PUBLIC_HOST_URI}/webhook/order/${order_id}`,
        },
      },
      {
        orderId: order_id,
        user: userData._id.toString(),
        address: shippingAddress._id.toString(),
        phoneNumber: userData.phoneNumber,
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
          checkoutType === "cart"
            ? userData.cart.products.map((i) => ({
                product: i.product._id.toString(),
                quantity: i.quantity,
                price: i.price,
                variations: i.variations,
              }))
            : [
                {
                  product: productsToSold[0].product._id.toString(),
                  quantity,
                  price: pricing.offerPrice,
                  variations: productsToSold[0].variations,
                },
              ],
        paymentMethod: paymentMode,
        paymentData: null,
        pricing: {
          total: pricing.offerPrice,
          shipping: pricing.shippingCharge,
          grandTotal: pricing.price,
        },
        payableAmount: pricing.price,
        currentStatus: "pending",
      }
    );
    paymentSessionId = await orderData.payment_session_id;

    const cashfree = await load({
      mode: process.env.NEXT_PUBLIC_CASHFREE_MODE,
    })
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
              onClick={payAndPlaceOrder}
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
              {pricing.shippingCharge?.toLocaleString() ??
                pricing.shippingCharge}{" "}
              (Included)
            </span>
            <span className="mb-auto text-xs">
              By placing your order, you agree to {siteConfig.name}'s{" "}
              <a
                target="_blank"
                href="/privacyPolicy"
                className="text-blue-500"
              >
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
  } else if (!userData) {
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
          closed={!createNewAddress}
          onClose={() => {
            setCreateNewAddress(false);
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
                shippingAddress &&
                currentAction != ACTION_ADDRESS && (
                  <Address
                    selected={true}
                    onClick={() => {}}
                    fullName={shippingAddress.fullName}
                    flatOrBuilding={shippingAddress.flatOrBuilding}
                    areaOrStreet={shippingAddress.areaOrStreet}
                    townOrCity={shippingAddress.townOrCity}
                    state={shippingAddress.state}
                    pincode={shippingAddress.pincode}
                    phoneNumber={shippingAddress.mobileNumber}
                  />
                )
              }
              id={1}
              action={ACTION_ADDRESS}
              title="Select a delivery address"
              currentAction={currentAction}
              setSelected={(value) => setCurrentAction(value)}
            >
              <CardContent title="Your addresses">
                <div className="flex flex-col gap-y-2 my-2">
                  {userData?.address
                    ? userData.address.map((i, idx) => (
                        <Address
                        key={idx}
                          selected={
                            shippingAddress?._id
                              ? shippingAddress._id === i._id
                              : null
                          }
                          onClick={() => setShippingAddress(i)}
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
                  onClick={() => setCreateNewAddress(true)}
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
                onSubmit={() => setCurrentAction(ACTION_PAYMENT_METHOD)}
                disabled={
                  userData.address.length <= 0 ||
                  !shippingAddress ||
                  currentAction != ACTION_ADDRESS ||
                  !paymentMode
                }
                btn_title="Use this address"
              />
            </Select>
            <Select
              unselected_content={
                currentAction != ACTION_PAYMENT_METHOD ? (
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
                      {/* <span
                        className={`text-xs text-left ${
                          CODavailable ? "hidden" : null
                        }`}
                      >
                        Unavailable for this payment
                      </span> */}
                    </div>
                  )
                ) : null
              }
              disabled={!shippingAddress}
              id={2}
              action={ACTION_PAYMENT_METHOD}
              title="Payment method"
              currentAction={currentAction}
              setSelected={(value) => setCurrentAction(value)}
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
                onSubmit={() => setCurrentAction(ACTION_REVIEW)}
                disabled={
                  !shippingAddress || currentAction != ACTION_PAYMENT_METHOD
                }
                btn_title="Use this payment method"
              />
            </Select>
            <Select
              expandable={false}
              id={3}
              action={ACTION_REVIEW}
              title="Review items and delivery"
              currentAction={currentAction}
              setSelected={(value) => setCurrentAction(value)}
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
                {checkoutType === "cart"
                  ? userData.cart.products.map((p, idx) => (
                      <CheckoutProductView
                        key={idx}
                        pricing={p.product.pricing}
                        title={p.product.title}
                        thumbnail={p.product.thumbnail}
                        quantity={p.quantity}
                      />
                    ))
                  : productsToSold.map((p, idx) => (
                      <CheckoutProductView
                        key={idx}
                        pricing={p.product.pricing}
                        availableQty={p.product.availableQty}
                        quantity={quantity}
                        setQuantity={(value) => dispatch(setQuantity(value))}
                        single={true}
                        title={p.product.title}
                        thumbnail={p.product.thumbnail}
                      />
                    ))}
              </div>
            </Select>
            {desktopMode && <PaySection />}
          </section>
          <section className="xl:w-1/3 lg:w-1/3 md:w-1/3 w-full h-full">
            <PaySection wrap={true} />
          </section>
        </main>
      </React.Fragment>
    );
  }
}
