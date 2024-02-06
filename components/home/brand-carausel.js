"use client"
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import React from "react";

export default function BrandCarausel() {
    const plugin = React.useRef(
        Autoplay({ delay: 1000, loop: true, stopOnInteraction: false })
    )

    return <div className="flex justify-center border-y">
        <Carousel
            plugins={[plugin.current]}
            opts={{
                align: "start",
                loop: true
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full"
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
                        <div className="p-1">
                            <img className="h-[50px] my-2" src={`/assets/temp/themeforest${index + 1}.webp`} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
}