import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";
// styles modules
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "@/styles/pagination.css";

interface SliderItemType {
  data?: {
    id: string;
    image: {
      url: string;
    };
    name: string;
  }[];
}

export default function Slider({ data }: SliderItemType) {
  const activeBulletClass = `swiper-pagination-bullet-active bg-border-200`;
  const bulletClass = `swiper-pagination-bullet bg-border-200`;
  return (
    <Fragment>
      <Swiper
        modules={[EffectFade, Pagination, Autoplay]}
        centeredSlides={true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          bulletClass,
          bulletActiveClass: activeBulletClass,
        }}
        loop={true}
        grabCursor={true}
        effect={"fade"}
        direction="horizontal"
        slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        spaceBetween={1}
      >
        {data && data.length > 0
          ? data.map((slider, idx) => {
              return (
                <SwiperSlide key={idx} className="m-0">
                  <div className="flex flex-row justify-center items-center">
                    <Image
                      src={slider.image.url}
                      alt={`Banner ${slider.name}`}
                      sizes="100vw"
                      width={0}
                      height={0}
                      style={{
                        width: "100%",
                        height: "100vh",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </SwiperSlide>
              );
            })
          : null}
      </Swiper>
      <div className="absolute bottom-0 swiper-pagination"></div>
    </Fragment>
  );
}
