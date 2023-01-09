import Image from 'next/image'
import Test1 from 'public/images/test1.jpg'
import Test2 from 'public/images/test2.jpg'
import Test3 from 'public/images/test3.jpg'

// import Swiper core and required modules

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const images = [ Test2, Test3 ]

export function Carousel() {

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay= {{ delay: 3000 }}
      loop= {true}
    >
      {images.map(image => {
        return (
          <SwiperSlide key={image}>
            <Image
              src={image}
              width={1280}
              alt="test_image"
              />
              {console.log(image)}
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};