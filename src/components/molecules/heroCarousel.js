import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function HeroCarousel({ heroCarousel_data }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="group  h-[85vh]  overflow-hidden "
    >
      {heroCarousel_data.map((heroImage, i) => {
        return (
          <SwiperSlide
            key={heroImage.id}
            className="relative h-[90vw] md:h-[54vw]"
          >
            {/* Our Carousel Image */}
            <div
              style={{
                position: "relative",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <Image
                src={heroImage.hero_url}
                alt="alt text"
                layout="fill"
                objectFit="cover"
                objectPosition="left 5% top 20%"
                className={` -z-10 block h-auto w-full text-secondary-500 duration-700 ease-in-out  ${
                  isLoading ? "scale-110  blur-2xl  " : "scale-100 blur-0  "
                }`}
                onLoadingComplete={() => setLoading(false)}
              />
            </div>

            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-primary-500 opacity-50 "></div>
            <div className="absolute bottom-0 left-0  h-full w-full flex flex-row justify-start">
              <div className="max-w-7xl mx-auto flex flex-col items-start justify-center w-3/5">
                <h1 className="text-4xl font-sans font-bold leading-noramal text-gray-50 ">
                  {heroImage.short_title}
                </h1>
                <p className="text-lg text-white font-serif mt-5 ">
                  {heroImage.hero_phrase}
                </p>
                <div className="flex flex-row items-center justify-start space-x-10">
                  <div className="my-4"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default HeroCarousel;
