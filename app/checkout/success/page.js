"use client";
import Navigation from "@/app/navigation";
import React from "react";
import { runFireworks } from "./fireworks";
import { Player } from "@lottiefiles/react-lottie-player";
import FilledButton from "@/app/(v1)/filledButton";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

const Success = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = React.useState(null);
  const [status, setStatus] = React.useState("loading");
  async function verifyOrder() {
    const cf_order_id = await searchParams.get("order_id");

    if (!cf_order_id) {
      alert("Order Id not found!");
      return setError({
        message: "OrderId not found!",
        code: "ORDER_ID_NOT_FOUND",
      });
    }
    await axios
      .post(`/webhook/order/${cf_order_id}`, {
        data: {
          order: {
            order_id: cf_order_id,
          },
        },
      })
      .then((result) => {
        setError(null);
        setStatus(result.data.status);
        if (result.data.status === "PAID") runFireworks();
        console.log("RESULT", result);
      })
      .catch((err) => {
        setError(err.message);
        console.error(err);
        setStatus(result?.response?.data?.status || null);
      });
  }

  React.useEffect(() => {
    if (!searchParams.get("cod")) verifyOrder();
    else runFireworks();
  }, [searchParams]);

  if (searchParams.get("cod"))
    return (
      <main className="w-full h-[78vh] justify-center bg-zinc-50  flex flex-col">
        <Player
          autoplay
          loop
          src="/lottie/order-confirmed.json"
          className="mt-auto"
          style={{ height: "300px", width: "300px" }}
        ></Player>
        <div className="text-lg mt-3 mb-auto text-gray-700 text-center font-medium mx-10">
          COD Order Successfull
          <FilledButton
            type="button"
            className="mt-5 mx-10"
            onClick={() => router.push("/")}
            lable="Continue Shopping"
          />
        </div>
      </main>
    );

  return (
    <>
      <Navigation pageName="Order Success" menuList={[]} />
      {status === "loading" ? (
        <main className="min-h-[78vh] justify-center bg-zinc-50 flex flex-col w-full">
          <Player
            autoplay
            loop
            src="/lottie/order-loading.json"
            className="mt-auto"
            style={{ height: "300px", width: "300px" }}
          ></Player>
          <div className="w-full justify-center px-5 flex flex-row">
            <span className="my-auto font-bold text-lg">
              Checking order status...
            </span>
          </div>
        </main>
      ) : (
        <main className="w-full h-[78vh] justify-center bg-zinc-50  flex flex-col">
          {status === "PAID" ? (
            <React.Fragment>
              <Player
                autoplay
                loop
                src="/lottie/order-confirmed.json"
                className="mt-auto"
                style={{ height: "300px", width: "300px" }}
              ></Player>
              <div className="text-lg mt-3 mb-auto text-gray-700 text-center font-medium mx-10">
                Payment Successfull
                <FilledButton
                  type="button"
                  className="mt-5"
                  onClick={() => router.push("/")}
                  lable="Continue Shopping"
                />
              </div>
            </React.Fragment>
          ) : status === "EXPIRED" ? (
            <React.Fragment>
              <Player
                autoplay
                loop
                src="/lottie/order-expired.json"
                className="mt-auto"
                style={{ height: "300px", width: "300px" }}
              ></Player>
              <div className="text-lg mt-3 mb-auto text-gray-700 text-center font-medium mx-10">
                Order Expired
              </div>
            </React.Fragment>
          ) : status === "ACTIVE" ? (
            <React.Fragment>
              <Player
                autoplay
                loop
                src="/lottie/order-active.json"
                className="mt-auto"
                style={{ height: "300px", width: "300px" }}
              ></Player>
              <div className="text-lg mt-3 mb-auto text-gray-700 text-center font-medium mx-10">
                Payment in process
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Player
                autoplay
                loop
                src="/lottie/no-orders.json"
                className="mt-auto"
                style={{ height: "300px", width: "300px" }}
              ></Player>
              <div className="text-lg mt-3 mb-auto text-gray-700 text-center font-medium mx-10">
                Failed to get order
              </div>
            </React.Fragment>
          )}
        </main>
      )}
    </>
  );
};

export default Success;
