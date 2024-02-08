"use client";
import { Carousel } from "react-responsive-carousel";

export default function BannerCarousel() {
    return (
        <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                    return (
                        <li
                            className="bg-primary w-[30px] h-[8px] rounded-full transition"
                            style={{
                                margin: "5px 8px",
                                display: "inline-block",
                            }}
                            aria-label={`Selected: ${label} ${index + 1}`}
                            title={`Selected: ${label} ${index + 1}`}
                        />
                    );
                }
                return (
                    <li
                        className="bg-[#bcbcbc] w-[8px] h-[8px] rounded-full transition"
                        style={{
                            margin: "5px 8px",
                            display: "inline-block",
                        }}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        title={`${label} ${index + 1}`}
                        aria-label={`${label} ${index + 1}`}
                    />
                );
            }}
        >
            <div>
                <img src="/assets/temp/v3-banner-1.png" />
            </div>
            <div>
                <img src="/assets/temp/v3-banner-2.png" />
            </div>
            <div>
                <img src="/assets/temp/v3-banner-3.png" />
            </div>
        </Carousel>
    );
}
