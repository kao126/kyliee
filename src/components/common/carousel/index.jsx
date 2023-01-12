import Image from 'next/image'
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from 'src/components/common/carousel/carousel.module.css'

import Test1 from 'public/images/test1.jpg'
import Test2 from 'public/images/test2.jpg'
import Test3 from 'public/images/test3.jpg'
const images = [Test1, Test2, Test3 ]

export function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 4000
      }}
      loop={true}
    >
      {images.map((image, i) => {
        return (
          <SwiperSlide key={i}>
            <div className='image-wrapper'>
              <Image
                src={image}
                alt="test_image"
                width={1280}
                height={600}
                className={styles.test-image}
                />
              </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};