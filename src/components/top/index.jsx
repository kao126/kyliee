'use client';
// Next.js
import Image from 'next/image';

// components
import { Sns } from 'src/components/top/sns';
import { TopNews } from 'src/components/top/news';
import { TopAbout } from 'src/components/top/about';
import { TopConcept } from 'src/components/top/concept';
import { TopColor } from 'src/components/top/topColor';
import { TopBlog } from 'src/components/top/blog';
import { TopGallery } from 'src/components/top/gallery';

// style
import { styles } from 'src/components/top/styles.css';

// image
import topImage from 'public/images/TOP_01.jpg';

// plugin
import { useInView } from 'react-intersection-observer';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

// atom
import { isTopImageOnScreenAtom } from 'src/atoms/displayHeader';

export function Top() {
  const setIsTopImageOnScreen = useSetAtom(isTopImageOnScreenAtom);
  const { ref, inView } = useInView({
    rootMargin: '-150px',
  });

  useEffect(() => {
    setIsTopImageOnScreen(inView);
  }, [inView]);

  return (
    <div>
      <Sns />
      <Image ref={ref} src={topImage} alt='トップ画像' className={styles.topImage} />
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
