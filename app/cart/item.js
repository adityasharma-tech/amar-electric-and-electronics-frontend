"use client";
import axios from "axios";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useDispatch } from "react-redux";
import { decreaseCartLen, increaseCartLen } from "@/lib/slices/appSlice";

export default function ListProductView(p) {
  const [quantity, setQuantity] = React.useState(p.quantity);
  const { toast } = useToast();
  const dispatch = useDispatch()
  async function modifyQuantity(type) {
    p.setProcessing(true);

    try {
      if (type === "INCREASE") {
        const jsonString = JSON.stringify({
          id: p.product._id.toString(),
          quantity: 1,
          price: p.product.pricing.offerPrice,
          variations: p.product.variations,
        });
        const base64String = btoa(jsonString);

        await axios
          .post("/api/user/cart?item=" + base64String)
          .then((value) => {setQuantity(quantity + 1);dispatch(increaseCartLen())});
      } else {
        const jsonString = JSON.stringify({
          id: p.product._id,
          price: p.product.pricing.offerPrice,
          quantity: 1,
          variations: p.product.variations,
        });
        const base64String = btoa(jsonString);

        await axios
          .delete(`/api/user/cart?item=${base64String}`)
          .then((value) => {
            if (quantity >= 2) {
              setQuantity(quantity - 1);
              dispatch(decreaseCartLen())
            }
          });
      }
    } catch (error) {
      toast({
        title: `Some error occured!`,
        description: error.message,
        variant: 'destructive'
      });
    } finally {
      p.setProcessing(false);
      p.refreshData();
    }
  }
  return (
    <div className="p-2">
      <div className="flex h-auto w-full gap-x-2 rounded-xl border bg-gray-50/50 p-1">
        <div className="relative w-[40%] md:w-[30%]">
          <Image
            alt={p.product.thumbnail.public_id}
            width={p.product.thumbnail.width}
            height={p.product.thumbnail.height}
            src={p.product.thumbnail.secure_url}
            className="h-36 w-full rounded-xl bg-zinc-100 object-cover"
          />
        </div>
        <div className="relative w-[60%] md:w-[70%]">
          <div className="flex gap-x-1">
            {p.product.rating ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 22 22"
              >
                <g
                  id="Group_334346"
                  data-name="Group 334346"
                  transform="translate(17150 -5434)"
                >
                  <rect
                    id="Rectangle_114376"
                    data-name="Rectangle 114376"
                    width="22"
                    height="22"
                    transform="translate(-17150 5434)"
                    fill="transparent"
                  ></rect>
                  <g
                    id="Group_334341"
                    data-name="Group 334341"
                    transform="translate(-17149 5435)"
                  >
                    <path
                      id="Path_332351"
                      data-name="Path 332351"
                      d="M1153.144,361.362a1.527,1.527,0,0,1,2.738,0l2.313,4.692,5.154.768a1.527,1.527,0,0,1,.848,2.6l-3.729,3.683.868,5.179a1.526,1.526,0,0,1-2.216,1.6l-4.606-2.424-4.607,2.424a1.526,1.526,0,0,1-2.216-1.6l.868-5.179-3.729-3.683a1.526,1.526,0,0,1,.848-2.6l5.154-.768Z"
                      transform="translate(-1144.374 -360.511)"
                      fill="#f4c730"
                      fillRule="evenodd"
                    ></path>
                  </g>
                </g>
              </svg>
            ) : null}
            <a className="text-xs font-medium">
              {p.product?.rating?.maxRating}
            </a>
          </div>
          <div className="text-base font-medium">
            <Link href={`/product/${p.product.slug}`}>{p.product.title}</Link>
          </div>
          <div className="flex gap-x-1 py-1">
            <span className="font-semibold">
              ₹{p.product.pricing.offerPrice.toLocaleString()}
            </span>
            <span className="mb-0.5 mt-auto text-xs font-medium line-through text-gray-300">
              ₹{p.product.pricing.price.toLocaleString()}
            </span>
            <span className="mb-0.5 mt-auto text-xs font-medium text-green-500">
              {Math.floor(100 - p.product.pricing.profit)}% off
            </span>
          </div>
          <div className="flex gap-x-1 border-t py-1 border-gray-100">
            {p.product.tags.map((t, index) => (
              <span
                key={index}
                className="rounded-lg bg-zinc-100 px-1 py-0.5 text-xs font-light capitalize"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-x-2">
            <div className="ml-auto">
              <Button className="rounded-xl px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </Button>
            </div>
            <div className="flex my-auto h-8 w-auto flex-wrap bg-zinc-100 ring-4 ring-zinc-100 rounded-full">
              <button
                onClick={() => modifyQuantity("DECREASE")}
                className="h-8 w-8 cursor-default border-2 border-gray-600 rounded-full flex"
              >
                <img src="/svg/minus.svg" className="px-1 my-auto" />
              </button>
              <button className="h-8 w-7 cursor-default flex">
                <a className="w-full font-medium text-center my-auto">
                  {quantity}
                </a>
              </button>
              <button
                onClick={() => modifyQuantity("INCREASE")}
                className="h-8 w-8 cursor-default bg-gray-600 rounded-full flex"
              >
                <svg
                  className="px-2 my-auto fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  fill="#fffff"
                >
                  <g>
                    <path d="M490.667,234.667H277.333V21.333C277.333,9.551,267.782,0,256,0c-11.782,0-21.333,9.551-21.333,21.333v213.333H21.333   C9.551,234.667,0,244.218,0,256c0,11.782,9.551,21.333,21.333,21.333h213.333v213.333c0,11.782,9.551,21.333,21.333,21.333   c11.782,0,21.333-9.551,21.333-21.333V277.333h213.333c11.782,0,21.333-9.551,21.333-21.333   C512,244.218,502.449,234.667,490.667,234.667z" />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
