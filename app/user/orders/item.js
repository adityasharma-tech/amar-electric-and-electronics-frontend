"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function OrderItem(o) {
  const router = useRouter();
  return (
    <div className="p-2 flex flex-col gap-y-2">
      <div className="border rounded-xl flex flex-col pb-2">
        <div className="flex px-3 justify-start pt-1">
          <span className="text-sm font-medium">OrderId: {o.orderId}</span>
        </div>
        {o.products.map((p, idx) => (
          <div
            key={idx}
            className="flex h-auto w-full gap-x-2 px-2 rounded-xl bg-white p-1"
          >
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
                <Link href={`/product/${p.product.slug}`}>
                  {p.product.title}
                </Link>
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
            </div>
          </div>
        ))}
        <div className="flex flex-row justify-around gap-x-2 px-2 py-1">
          <Button
            onClick={() => router.push(`/user/order/${o.orderId}`)}
            className="w-full active:bg-zinc-800"
          >
            View Order
          </Button>
          <Button
            disabled
            style={{
              boxShadow: "0px 0px 2px rgb(190 18 60 /1)",
            }}
            className="w-full border border-rose-700 text-rose-700 bg-transparent hover:bg-rose-200"
          >
            Request Cancelation
          </Button>
        </div>
      </div>
    </div>
  );
}
