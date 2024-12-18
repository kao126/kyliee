// Next.js
import Image from 'next/image';

// styles
import { styles } from 'src/components/common/carousel/styles.css';

// plugin
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

export function Carousel({ images, ...custom }) {
  return (
    <Swiper {...custom}>
      {images.map((image, i) => (
        <SwiperSlide key={i}>
          <Image src={image} alt={`画像${i}`} className={styles.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
