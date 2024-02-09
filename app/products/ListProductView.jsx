import AddToCartButton from "@/components/home/addToCartButton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
export default function ListProductView(p) {
  return (
    <Link href={`/product/${p.slug}`}><div className="p-2">
      <div className="flex h-auto w-full gap-x-2 rounded-xl border bg-gray-50/50 p-1">
        <div className="relative w-[40%] md:w-[30%]">
          <Image
          alt={p.thumbnail.public_id}
          width={p.thumbnail.width}
          height={p.thumbnail.height}
            src={p.thumbnail.secure_url}
            className="h-36 w-full rounded-xl bg-zinc-100 object-cover"
          />
          <span
            className={cn(
              "absolute bottom-0 left-0 right-0 z-20 w-full rounded-b-xl bg-[#fcc50b] py-0.5 text-center text-xs font-bold capitalize"
            )}
          >
            {p.category.title}
          </span>
        </div>
        <div className="relative w-[60%] md:w-[70%]">
          <div className="flex gap-x-1">
            {p.rating ? <svg
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
            </svg> : null}
            <a className="text-xs font-medium">{p?.rating?.max_rating}</a>
          </div>
          <div className="text-base font-medium">{p.title}</div>
          <div className="flex gap-x-1 py-1">
            <span className="font-semibold">₹{p.pricing.offerPrice.toLocaleString()}</span>
            <span className="mb-0.5 mt-auto text-xs font-medium line-through text-gray-300">
              ₹{p.pricing.price.toLocaleString()}
            </span>
            <span className="mb-0.5 mt-auto text-xs font-medium text-green-500">
              {Math.floor(100-p.pricing.profit)}% off
            </span>
          </div>
          <div className="flex gap-x-1 border-t py-1 border-gray-100">
            {p.tags.map((t, index)=><span key={index} className="rounded-lg bg-zinc-100 px-1 py-0.5 text-xs font-light capitalize">
              {t}
            </span>)}
          </div>
          <AddToCartButton
            price={p.pricing.offerPrice}
            variations={p.variations}
            productId={p._id.toString()}
            className="w-full"
          />
        </div>
      </div>
    </div></Link>
  );
}
