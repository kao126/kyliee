import Image from "next/image";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image1 from "public/images/test1.jpg";
import Image2 from "public/images/test2.jpg";
import Image3 from "public/images/test3.jpg";
import { useHeaderScroll } from "src/hooks/useHeaderScroll";

const images = [Image1, Image2, Image3];

export function Carousel() {
  const { ref } = useHeaderScroll();

  return (
    <Swiper
      modules={[Pagination, Scrollbar, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 4000,
      }}
      loop={true}
    >
      {images.map((image, i) => {
        return (
          <SwiperSlide key={i}>
            <Image
              src={image}
              alt="test_image"
              sizes="(max-width: 768px) 100vw,
                (max-width: 425px) 100vw,
                100vw"
              width={1480}
              height={780}
              object-fit="cover"
              aria-hidden="true"
              ref={ref}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
