import siteConfig from "@/config/siteConfig";
import Image from "next/image";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export default function Navbar() {
    return (
        <React.Fragment>
            <div style={{
                fontSize: ".829em"
            }} className="h-10 text-zinc-600 py-2 px-24 text-xs bg-[#151515] md:flex hidden justify-between">
                <div>
                    <span className="hover:text-white cursor-pointer transition-colors">Welcome to Worldwide Electronics Store</span>
                </div>
                <div className="flex justify-around gap-x-2">
                <button className="flex gap-x-2 my-auto hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg> Store Locator
                    </button>
                    <span className="h-full my-auto mt-1">|</span>
                    <button className="flex gap-x-2 my-auto hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg> Store Locator
                    </button>
                    <span className="h-full my-auto mt-1">|</span>
                    <button className="flex gap-x-2 my-auto hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg> Store Locator
                    </button>

                </div>
            </div>
            <header className="py-[20px] text-white bg-[#151515] flex flex-row px-5 md:px-24 justify-between">
                <div>
                    <Image width={40} height={40} src={siteConfig.logo._round} />
                </div>
                <div className="lg:flex hidden my-auto">
                    <ul className="flex gap-x-8 font-semibold text-[1em]">
                        <li className="hover:text-yellow-600 transition cursor-pointer">Home</li>
                        <li className="hover:text-yellow-600 transition cursor-pointer">About Us</li>
                        <li className="hover:text-yellow-600 transition cursor-pointer">Blog</li>
                        <li className="hover:text-yellow-600 transition cursor-pointer">Pages</li>
                        <li className="hover:text-yellow-600 transition cursor-pointer">Features</li>
                        <li className="hover:text-yellow-600 transition cursor-pointer">Contact Us</li>
                    </ul>
                </div>
                <div className="flex gap-x-10">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Favorities</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Your Profile</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <span className="flex my-auto gap-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                        </svg>
                                        <span className="text-base my-auto font-bold">
                                            $0.00
                                        </span>
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Cart</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                </div>
            </header>
        </React.Fragment>
    )
}