// Next.js
import Link from 'next/link';

// components
import { Carousel } from 'src/components/common/carousel';

// style
import { styles } from 'src/components/top/gallery/styles.css';

// images
import Image1 from 'public/images/01.webp';
import Image2 from 'public/images/02.jpg';
import Image3 from 'public/images/03.webp';

const images = [Image1, Image2, Image3];

// plugin
import { Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';

const carouselProps = {
  modules: [Pagination, Scrollbar, Autoplay, EffectFade],
  pagination: { clickable: true },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  speed: 3000,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  loop: true,
};

export function TopGallery() {
  return (
    <div id='gallery'>
      <div className='contents'>
        <h1 className={styles.titleWrapper}>GALLERY</h1>
        <div className={styles.description}>ギャラリーの説明</div>
        <div className={styles.carousel}>
          <Carousel images={images} {...carouselProps} />
        </div>
        <Link href={'/gallery'} className={styles.viewMore}>
          VIEW MORE
        </Link>
      </div>
    </div>
  );
}
