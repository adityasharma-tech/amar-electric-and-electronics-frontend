"use client";
import React, { useEffect, useState } from "react";
import Navigation from "../../navigation";
import Item from "./item";
import FilledButton from "../filledButton";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { Player } from "@lottiefiles/react-lottie-player";
import CartSkeleton from "@/components/skeleton/cart";
import CartDescSkeleton from "../@/components/skeleton/cart-desc";
import { useDispatch } from "react-redux";
import { setCartlenKey } from "@/lib/slices/appSlice";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";

const Cart = () => {
  const router = useRouter();
  const [processing, setProcessing] = useState(false);
  const skeleton = [{ id: 12 }, { id: 12 }, { id: 12 }, { id: 12 }, { id: 12 }];
  const dispatch = useDispatch();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [offerPrice, setOfferPrice] = useState(null);
  const fetchUser = async () => {
    let response = await fetch(`/api/user/data?field=cart`, {
      method: "GET",
    });
    let res = await response.json();
    setProducts(res.data.products);
    setOfferPrice(res.data.grandTotal);
  };
  useEffect(() => {
    if (status === "authenticated") {
      setLoading(true);
      try {
        fetchUser();
        dispatch(setCartlenKey(Math.random()));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }, [status]);
  if (status === "loading") {
    return (
      <div>
        <Navigation pageName="My Cart" menuList={[]} />
        {skeleton.map((i, index) => (
          <div key={index}>
            <CartSkeleton />
          </div>
        ))}
      </div>
    );
  }
  if (!session) {
    redirect("/user");
  } else {
    return (
      <>
        <Navigation menuList={[]} pageName={"My Cart"} />
        {loading &&
          skeleton.map((item, i) => (
            <div key={i}>
              <CartSkeleton />
            </div>
          ))}
        {loading && <CartDescSkeleton />}
        {!loading ? (
          products.length <= 0 ? (
            <div className="w-full h-full flex flex-col">
              <Player
                autoplay
                loop
                src="/lottie/cart.json"
                className="mt-auto"
                style={{ height: "300px", width: "300px" }}
              ></Player>
              <div className="text-lg mt-3 mb-auto text-gray-700 text-center font-medium">
                Your Alishan cart is empty.
              </div>
            </div>
          ) : (
            <div className="flex lg:flex-row flex-col w-full min-h-[90vh]">
              <div className="w-full">
                {products.map((p, idx) => (
                  <Item setProcessing={(v)=>setProcessing(v)} refreshData={fetchUser} key={idx} {...p} />
                ))}
              </div>
              <div className="w-full h-auto lg:p-5 p-2 lg:mt-0 lg:relative fixed bottom-16">
                <div className="flex p-5 bg-zinc-50 rounded-t-lg">
                  <div className="w-1/2 font-medium text-gray-700">Total:</div>
                  <div className="w-1/2 text-right font-bold text-gray-700">
                    ₹{offerPrice.toLocaleString()}
                  </div>
                </div>
                <div className="p-2 bg-zinc-50 rounded-b-lg grid grid-cols-2 gap-x-2">
                  <Button onClick={()=>{
                    try{
                      axios.delete('/api/user/cart/clearCart')
                    } finally {
                      fetchUser()
                    }
                  }} className="border-black border hover:bg-zinc-100 bg-transparent text-black">
                    Clear Cart
                  </Button>
                  <Link href="/checkout/cart">
                    <Button disabled={processing} className="w-full">Checkout</Button>
                  </Link>
                </div>
              </div>
            </div>
          )
        ) : null}
      </>
    );
  }
};

export default Cart;
