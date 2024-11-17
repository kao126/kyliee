import Image from 'next/image';
// components
import { Sns } from 'src/components/top/sns';
import { Carousel } from 'src/components/common/carousel';
import { TopNews } from 'src/components/top/news';
import { TopAbout } from 'src/components/top/about';
import { TopConcept } from 'src/components/top/concept';
import { TopColor } from 'src/components/top/topColor';
import { TopBlog } from 'src/components/top/blog';
import { TopGallery } from 'src/components/top/topGallery';

// style
import { styles } from 'src/components/top/styles.css';

// image
import topImage from 'public/images/TOP_01.jpg';

export function Top() {
  return (
    <div>
      <Sns />
      {/* <Carousel /> */}
      <Image src={topImage} alt='トップ画像' className={styles.topImage} />
      <div className={styles.topComponents}>
        <TopNews />
        <TopAbout />
        <TopConcept />
        <TopBlog />
        <TopGallery />
      </div>
      {/* <TopColor /> */}
    </div>
  );
}
