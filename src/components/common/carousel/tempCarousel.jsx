// Next.js
import Image from 'next/image';
// React.js
import React, { useState, useEffect } from 'react';
// Swiper
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay, Thumbs } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

// // style
import styled from '@emotion/styled';
import Image1 from 'public/images/01.webp';
import Image2 from 'public/images/02.jpg';
import Image3 from 'public/images/03.webp';
import NoImage from 'public/images/NO_IMAGE.jpg';

const images = [Image1, Image2];

export function TempCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleSwiper = (swiper) => {
    setThumbsSwiper(swiper);
  };

  useEffect(() => {
    console.log(thumbsSwiper);
  }, [thumbsSwiper]);

  return (
    <>
      <StyledSwiper
        modules={[FreeMode, Pagination, Autoplay, Thumbs]}
        pagination={{ clickable: true }}
        loop={true}
        onSwiper={setThumbsSwiper}
        autoplay={{
          delay: 4000,
        }}
      >
        {images.map((image, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={image.src} alt={`画像${i}`} className='img' />
            </SwiperSlide>
          );
        })}
      </StyledSwiper>
      {/* <StyledSwiper modules={[FreeMode, Pagination, Thumbs]} pagination={{ clickable: true }} loop={true} thumbs={{ swiper: thumbsSwiper }}>
        {images.map((image, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={image.src} alt={`画像${i}`} className='img' />
            </SwiperSlide>
          );
        })}
      </StyledSwiper> */}
    </>
  );
}

const StyledSwiper = styled(Swiper)`
  .img {
    width: 100%;
  }
`;
