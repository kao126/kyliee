import Image from 'next/image';
// components
import { Sns } from 'src/components/top/sns';
import { Carousel } from 'src/components/common/carousel';
import { TopNews } from 'src/components/top/news';
import { TopContents } from 'src/components/top/topContents';
import { TopColor } from 'src/components/top/topColor';
import { TopBlog } from 'src/components/top/topBlog';
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
        <TopContents />
        <TopBlog />
        <TopGallery />
      </div>
      {/* <TopColor /> */}
    </div>
  );
}
