// Next.js
import Image from 'next/image';

// hooks
import {useHeaderScroll} from 'src/hooks/useHeaderScroll';

// Swiper
// import Swiper core and required modules
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Scrollbar, Autoplay} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// // style
import styled from '@emotion/styled';
import Image1 from 'public/images/TOP_01.webp';
import Image2 from 'public/images/TOP_02.jpg';
import Image3 from 'public/images/TOP_03.webp';

const images = [Image1, Image2, Image3];

export function Carousel() {
  const {ref} = useHeaderScroll();

  return (
    <Swiper
      modules={[Pagination, Scrollbar, Autoplay]}
      pagination={{clickable: true}}
      scrollbar={{draggable: true}}
      autoplay={{
        delay: 4000,
      }}
      loop={true}
    >
      {images.map((image, i) => {
        return (
          <SwiperSlide key={i}>
            <StyledImage src={image} alt={`画像${i}`} ref={ref} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

const StyledImage = styled(Image)`
  height: 100vh;
  object-fit: cover;
  object-position: top;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
    object-position: center;
  }
  @media screen and (max-width: 425px) {
    height: 100vh;
    object-position: right -280px top 0px;
  }
`;
