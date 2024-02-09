"use client"
import AddToCartButton from "@/components/home/addToCartButton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Item({ thumbnail,slug, title, category, pricing, tags, variations, productId }) {
    const router = useRouter()
  return (
    <div className="p-2">
      <div className="flex h-auto w-full gap-x-2 rounded-xl border bg-gray-50/50 p-1">
        <div onClick={()=>router.push(`/product/${slug}`)} className="relative w-[40%] md:w-[30%]">
          <Image
            alt={thumbnail.asset_id}
            width={thumbnail.width}
            height={thumbnail.height}
            src={thumbnail.secure_url}
            objectFit="cover"
            className="h-36 w-full rounded-xl bg-zinc-100 object-cover"
          />
        </div>
        <div className="relative w-[60%] md:w-[70%]">
          <div onClick={()=>router.push(`/product/${slug}`)} className="flex gap-x-1">
            {/* <svg
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
            <a className="text-xs font-medium">4.2</a> */}
          </div>
          <div onClick={()=>router.push(`/product/${slug}`)} className="text-base font-medium">{title}</div>
          <div onClick={()=>router.push(`/product/${slug}`)} className="flex gap-x-1 py-1">
            <span className="font-semibold">₹{pricing.offerPrice.toLocaleString()}</span>
            <span className="mb-0.5 mt-auto text-xs font-medium line-through text-gray-300">
              ₹{pricing.price.toLocaleString()}
            </span>
            <span className="mb-0.5 mt-auto text-xs font-medium text-green-500">
              {Math.floor(100-pricing.profit)}% off
            </span>
          </div>
          <div onClick={()=>router.push(`/product/${slug}`)} className="flex gap-x-1 border-t py-1 border-gray-100">
            {tags ? tags.map((i, index)=><span key={index} className="rounded-lg bg-zinc-100 px-1 py-0.5 text-xs font-light capitalize">
              {i}
            </span>) :null}
          </div>
          <AddToCartButton
            price={pricing.offerPrice}
            variations={variations}
            productId={productId}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
