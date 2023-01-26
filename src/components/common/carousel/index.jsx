// Next.js
import Image from "next/image";

// hooks
import { useHeaderScroll } from "src/hooks/useHeaderScroll";

// Swiper
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// // style
import styles from "src/components/common/carousel/carousel.module.css";
import Image1 from "public/images/test1.jpg";
import Image2 from "public/images/test2.jpg";
import Image3 from "public/images/test3.jpg";
import Image4 from "public/images/test4.jpg";
import Image5 from "public/images/test5.jpg";
import Image6 from "public/images/test6.jpg";
import Image7 from "public/images/test7.jpg";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

export function Carousel() {
  const { ref } = useHeaderScroll();

  return (
    <Swiper
      modules={[Pagination, Scrollbar, Autoplay]}
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
            <Image src={image} alt={`画像${i}`} ref={ref} className={styles.image} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
