import Navbar from "@/components/home/navbar";
import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";
import Image from "next/image";
import "./styles/font-electro.css"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const roboto = Roboto({
  style: "normal",
  subsets: ["cyrillic"],
  weight: "700"
})
export default function Home() {

  function ProductCart() {
    return <div className="flex group flex-col h-[285px] gap-y-3 p-3 border-x border-b border-zinc-100 hover:bg-zinc-100/30 transition hover:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]">
      <span className="text-xs text-[#4c4c4c] font-medium">Smartphones</span>
      <span style={{
        fontSize: ".857emds"
      }} className="font-semibold text-sm text-blue-700">Smartphone 6S 32GB LTE</span>
      <div className="relative h-32 w-full md:h-full">
        <Image alt="Iphone" style={{
          objectFit: "contain"
        }} layout="fill" src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/GoldPhone-1-300x300.png" />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-sm text-[#768b9e] line-through">₹1250.00</span>
          <span className="text-red-600 font-medium">₹11000.00</span>
        </div>
        <button className="rounded-full bg-gray-800 group-hover:bg-[#fdd700] w-9 h-9 flex justify-center">
          <svg className="w-5 h-4.5 my-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-white group-hover:fill-black" fillRule="evenodd" clipRule="evenodd" d="M14 2C14 1.44772 13.5523 1 13 1C12.4477 1 12 1.44772 12 2V8.58579L9.70711 6.29289C9.31658 5.90237 8.68342 5.90237 8.29289 6.29289C7.90237 6.68342 7.90237 7.31658 8.29289 7.70711L12.2929 11.7071C12.6834 12.0976 13.3166 12.0976 13.7071 11.7071L17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L14 8.58579V2ZM1 3C1 2.44772 1.44772 2 2 2H2.47241C3.82526 2 5.01074 2.90547 5.3667 4.21065L5.78295 5.73688L7.7638 13H18.236L20.2152 5.73709C20.3604 5.20423 20.9101 4.88998 21.4429 5.03518C21.9758 5.18038 22.29 5.73006 22.1448 6.26291L20.1657 13.5258C19.9285 14.3962 19.1381 15 18.236 15H8V16C8 16.5523 8.44772 17 9 17H16.5H18C18.5523 17 19 17.4477 19 18C19 18.212 18.934 18.4086 18.8215 18.5704C18.9366 18.8578 19 19.1715 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5C14 19.3288 14.0172 19.1616 14.05 19H10.95C10.9828 19.1616 11 19.3288 11 19.5C11 20.8807 9.88071 22 8.5 22C7.11929 22 6 20.8807 6 19.5C6 18.863 6.23824 18.2816 6.63048 17.8402C6.23533 17.3321 6 16.6935 6 16V14.1339L3.85342 6.26312L3.43717 4.73688C3.31852 4.30182 2.92336 4 2.47241 4H2C1.44772 4 1 3.55228 1 3ZM16 19.5C16 19.2239 16.2239 19 16.5 19C16.7761 19 17 19.2239 17 19.5C17 19.7761 16.7761 20 16.5 20C16.2239 20 16 19.7761 16 19.5ZM8 19.5C8 19.2239 8.22386 19 8.5 19C8.77614 19 9 19.2239 9 19.5C9 19.7761 8.77614 20 8.5 20C8.22386 20 8 19.7761 8 19.5Z" />
          </svg>
        </button>
      </div>
    </div>
  }

  return (
    <main>
      <Navbar />
      <section className="h-screen w-full" style={{
        backgroundImage: `url("/assets/images/hero.webp")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
        <div className="h-full relative w-full">
          <div className="h-[60%] relative pt-10 w-full md:flex">
            <div className="md:w-[63%] w-full flex text-white">
              <div className="my-auto w-full px-5">
                <div>
                  <h1 style={{
                    fontSize: "54px",
                    lineHeight: "56px"
                  }} className="font-light">OVER <strong className="font-bold">1 MILION</strong></h1>
                  <h2 className="font-semibold text-[14px] w-full text-center md:w-auto md:text-[14.5px] tracking-tight">OF COOL ELECTRONICS AND TECH GADGETS OUT THERE</h2>
                </div>
                <div className="md:w-[80%] py-7">
                  <div className="flex h-14">
                    <input placeholder="Search products..." style={{
                      color: "#dfdfdf",
                      backgroundColor: "#4c4c4c",
                      paddingLeft: "26px"
                    }} className="h-full w-full text-sm placeholder:text-[#dfdfdf] focus:outline-none rounded-l-full" />
                    <button className="rounded-r-full hover:bg-black group flex w-20 transition duration-500 bg-primary justify-center">
                      <svg className="w-7 h-7 my-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="group-hover:fill-white fill-gray-800 transition" fillRule="evenodd" clipRule="evenodd" d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[37%] w-full md:pl-10 md:pr-2">
              <div className="flex gap-x-3 px-3 py-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fdd700" className="w-8 my-auto h-8">
                  <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd" />
                </svg>
                <span className={cn("text-white font-bold text-xl text-center my-auto", roboto.className)}>
                  Hot Products Today
                </span>
              </div>

              <div className="px-4 h-full">
                <div className="bg-[#1b1a1a] text-white gap-x-3 justify-around p-5 grid-cols-2 grid rounded-xl border-2 border-[#4c4c4c] h-full">
                  {/* Product */}
                  <div className="flex flex-col gap-y-3 border-r pr-2 border-[#4c4c4c]">
                    <span className="text-xs text-[#4c4c4c] font-medium">Smartphones</span>
                    <span style={{
                      fontSize: ".857emds"
                    }} className="font-semibold">Smartphone 6S 32GB LTE</span>
                    <div className="relative h-32 w-full md:h-full">
                      <Image alt="Iphone" style={{
                        objectFit: "contain"
                      }} layout="fill" src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/GoldPhone-1-300x300.png" />
                    </div>
                    <div className="flex justify-between group">
                      <div className="flex flex-col">
                        <span className="text-sm text-[#768b9e] line-through">₹1250.00</span>
                        <span className="text-red-600 font-medium">₹11000.00</span>
                      </div>
                      <button className="rounded-full bg-gray-800 group-hover:bg-[#fdd700] w-9 h-9 flex justify-center">
                        <svg className="w-5 h-4.5 my-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path className="fill-white group-hover:fill-black" fillRule="evenodd" clipRule="evenodd" d="M14 2C14 1.44772 13.5523 1 13 1C12.4477 1 12 1.44772 12 2V8.58579L9.70711 6.29289C9.31658 5.90237 8.68342 5.90237 8.29289 6.29289C7.90237 6.68342 7.90237 7.31658 8.29289 7.70711L12.2929 11.7071C12.6834 12.0976 13.3166 12.0976 13.7071 11.7071L17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L14 8.58579V2ZM1 3C1 2.44772 1.44772 2 2 2H2.47241C3.82526 2 5.01074 2.90547 5.3667 4.21065L5.78295 5.73688L7.7638 13H18.236L20.2152 5.73709C20.3604 5.20423 20.9101 4.88998 21.4429 5.03518C21.9758 5.18038 22.29 5.73006 22.1448 6.26291L20.1657 13.5258C19.9285 14.3962 19.1381 15 18.236 15H8V16C8 16.5523 8.44772 17 9 17H16.5H18C18.5523 17 19 17.4477 19 18C19 18.212 18.934 18.4086 18.8215 18.5704C18.9366 18.8578 19 19.1715 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5C14 19.3288 14.0172 19.1616 14.05 19H10.95C10.9828 19.1616 11 19.3288 11 19.5C11 20.8807 9.88071 22 8.5 22C7.11929 22 6 20.8807 6 19.5C6 18.863 6.23824 18.2816 6.63048 17.8402C6.23533 17.3321 6 16.6935 6 16V14.1339L3.85342 6.26312L3.43717 4.73688C3.31852 4.30182 2.92336 4 2.47241 4H2C1.44772 4 1 3.55228 1 3ZM16 19.5C16 19.2239 16.2239 19 16.5 19C16.7761 19 17 19.2239 17 19.5C17 19.7761 16.7761 20 16.5 20C16.2239 20 16 19.7761 16 19.5ZM8 19.5C8 19.2239 8.22386 19 8.5 19C8.77614 19 9 19.2239 9 19.5C9 19.7761 8.77614 20 8.5 20C8.22386 20 8 19.7761 8 19.5Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <span className="text-xs text-[#4c4c4c] font-medium">Smartphones</span>
                    <span style={{
                      fontSize: ".857emds"
                    }} className="font-semibold">Smartphone 6S 32GB LTE</span>
                    <div className="relative h-32 w-full md:h-full">
                      <Image alt="iphone" style={{
                        objectFit: "contain"
                      }} layout="fill" src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/redmi-300x300.png" />
                    </div>
                    <div className="flex justify-between group">
                      <div className="flex flex-col">
                        <span className="text-sm text-[#768b9e] line-through">₹1250.00</span>
                        <span className="text-red-600 font-medium">₹11000.00</span>
                      </div>
                      <button className="rounded-full bg-gray-800 group-hover:bg-[#fdd700] w-9 h-9 flex justify-center">
                        <svg className="w-5 h-4.5 my-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path className="fill-white group-hover:fill-black" fillRule="evenodd" clipRule="evenodd" d="M14 2C14 1.44772 13.5523 1 13 1C12.4477 1 12 1.44772 12 2V8.58579L9.70711 6.29289C9.31658 5.90237 8.68342 5.90237 8.29289 6.29289C7.90237 6.68342 7.90237 7.31658 8.29289 7.70711L12.2929 11.7071C12.6834 12.0976 13.3166 12.0976 13.7071 11.7071L17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L14 8.58579V2ZM1 3C1 2.44772 1.44772 2 2 2H2.47241C3.82526 2 5.01074 2.90547 5.3667 4.21065L5.78295 5.73688L7.7638 13H18.236L20.2152 5.73709C20.3604 5.20423 20.9101 4.88998 21.4429 5.03518C21.9758 5.18038 22.29 5.73006 22.1448 6.26291L20.1657 13.5258C19.9285 14.3962 19.1381 15 18.236 15H8V16C8 16.5523 8.44772 17 9 17H16.5H18C18.5523 17 19 17.4477 19 18C19 18.212 18.934 18.4086 18.8215 18.5704C18.9366 18.8578 19 19.1715 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5C14 19.3288 14.0172 19.1616 14.05 19H10.95C10.9828 19.1616 11 19.3288 11 19.5C11 20.8807 9.88071 22 8.5 22C7.11929 22 6 20.8807 6 19.5C6 18.863 6.23824 18.2816 6.63048 17.8402C6.23533 17.3321 6 16.6935 6 16V14.1339L3.85342 6.26312L3.43717 4.73688C3.31852 4.30182 2.92336 4 2.47241 4H2C1.44772 4 1 3.55228 1 3ZM16 19.5C16 19.2239 16.2239 19 16.5 19C16.7761 19 17 19.2239 17 19.5C17 19.7761 16.7761 20 16.5 20C16.2239 20 16 19.7761 16 19.5ZM8 19.5C8 19.2239 8.22386 19 8.5 19C8.77614 19 9 19.2239 9 19.5C9 19.7761 8.77614 20 8.5 20C8.22386 20 8 19.7761 8 19.5Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid p-3 gap-3 absolute md:-bottom-40 -bottom-48 grid-rows-1 md:grid-rows-2 grid-cols-1">
            <div className="grid gap-3 md:grid-cols-2 md:grid-rows-1 grid-rows-2">
              <img className="shadow-xl" src="/assets/temp/ban-1.png" />
              <div className="grid gap-3 grid-cols-2">
                <img className="shadow-xl" src="/assets/temp/ban-2.png" />
                <img className="shadow-xl" src="/assets/temp/ban-3.png" />
              </div>
            </div>
            <div className="grid-cols-4 gap-3 hidden md:grid">
              <img className="shadow-xl" src="/assets/temp/ban-4.png" />
              <img className="shadow-xl" src="/assets/temp/ban-5.png" />
              <img className="shadow-xl" src="/assets/temp/ban-6.png" />
              <img className="shadow-xl" src="/assets/temp/ban-7.png" />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-24 to-[#212121] from-[#151515] bg-gradient-to-t" />
      <section className="min-h-screen py-10 mt-20">
        <div className="flex w-full h-full px-28 ">
          <div className="w-3/12 h-full px-5">
            <div className="pb-5 pt-3">
              <div className="relative">
                <span style={{
                  borderBottom: "1px solid #ddd",
                  lineHeight: "0.4em",
                  paddingBottom: "1rem"
                }} className="font-bold text-gray-600 w-full block title text-[18px]">Assortment</span>
              </div>
            </div>
            <ul id="collection-links" className="text-sm">
              <ul>
                <li className="font-semibold py-1.5 hover:bg-zinc-200/50 transition lg:cursor-pointer px-1 hover:font-semibold">Value of the Day</li>
                <li className="font-semibold py-1.5 hover:bg-zinc-200/50 transition lg:cursor-pointer border-t px-1 hover:font-semibold"><a>Top 100 Offers</a></li>
                <li className="font-semibold py-1.5 hover:bg-zinc-200/50 transition lg:cursor-pointer border-t px-1 hover:font-semibold"><a>New Arrivals</a></li>
              </ul>
              <li className="relative py-1.5 hover:bg-zinc-200/50 transition lg:cursor-pointer border-t px-1 hover:font-semibold"><a>Computer & Accessories</a></li>
              <li className="relative py-1.5 hover:bg-zinc-200/50 transition lg:cursor-pointer border-t px-1 hover:font-semibold"><a>Camera, Audio & Video</a></li>
              <li className="relative py-1.5 hover:bg-zinc-200/50 transition lg:cursor-pointer border-t px-1 hover:font-semibold"><a>Mobile & Tablets</a></li>
              <li className="relative py-1.5 hover:bg-zinc-200/50 transition lg:cursor-pointer border-t px-1 hover:font-semibold"><a>Movies, Music & Video Games</a></li>
              <li className="relative py-1.5 hover:bg-zinc-200/50 transition lg:cursor-pointer border-t px-1 hover:font-semibold"><a>Watches & Eyewear</a></li>
              <li className="relative py-1.5 hover:bg-zinc-200/50 transition lg:cursor-pointer border-t px-1 hover:font-semibold"><a>Car, Motorbike & Industrial</a></li>
              <li className="relative py-1.5 hover:bg-zinc-200/50 transition lg:cursor-pointer border-t px-1 hover:font-semibold"><a>TV & Audio</a></li>
            </ul>
            <div className="py-10 flex justify-center">
              <img src="/assets/temp/ad-banner-sidebar.webp" />
            </div>
          </div>
          <div className="w-9/12 h-full">
            <div className="">
              <div className="relative">
                <span style={{
                  borderBottom: "1px solid #ddd",
                  lineHeight: "0.4em",
                  paddingBottom: "1rem"
                }} className="font-medium text-gray-600 w-full block title text-xl">Value of the Day</span>
              </div>
            </div>
            <div className="grid grid-cols-4">
              <ProductCart />
              <ProductCart />
              <ProductCart />
              <ProductCart />
              <ProductCart />
              <ProductCart />
              <ProductCart />
              <ProductCart />
              <ProductCart />
              <ProductCart />
              <ProductCart />
              <ProductCart />

            </div>
          </div>
        </div>
      </section>
      <section className="px-28">
        <div className="flex justify-center border-y">
        <Carousel
          opts={{
            align: "center",
            loop: true
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/3 lg:basis-1/5">
                <div className="p-1">
                  <img className="h-[50px] my-2" src={`/assets/temp/themeforest${index+1}.webp`} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </div>
      </section>
      <div className="h-screen"></div>
    </main>
  );
}
