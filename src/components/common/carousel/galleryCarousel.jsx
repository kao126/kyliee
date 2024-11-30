'use client';
// Next.js
import Image from 'next/image';

// Swiper
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

// images
import styled from '@emotion/styled';
import Image1 from 'public/images/01.webp';
import Image2 from 'public/images/02.jpg';
import Image3 from 'public/images/03.webp';
import NoImage from 'public/images/NO_IMAGE.jpg';

const images = [Image1, Image2, Image3];

export function GalleryCarousel() {
  return (
    <Swiper
      modules={[Pagination, Scrollbar, Autoplay, EffectFade]}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      speed={3000}
      effect='fade'
      fadeEffect={{ crossFade: true }}
      loop={true}
    >
      {images.map((image, i) => {
        return (
          <SwiperSlide key={i}>
            <StyledImage src={image} alt={`画像${i}`} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
    object-position: center;
  }
`;
