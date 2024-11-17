// Next.js
import Link from 'next/link';

// components
import { GalleryCarousel } from 'src/components/common/carousel/galleryCarousel';

// style
import { styles } from 'src/components/top/gallery/styles.css';

export function TopGallery() {
  return (
    <div id='gallery'>
      <div className='contents'>
        <h1 className={styles.titleWrapper}>GALLERY</h1>
        <div className={styles.description}>ギャラリーの説明</div>
        <GalleryCarousel />
        <Link href={'/gallery'} className={styles.viewMore}>
          VIEW MORE
        </Link>
      </div>
    </div>
  );
}
