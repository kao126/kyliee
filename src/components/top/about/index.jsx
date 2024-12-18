// Next.js
import Image from 'next/image';
import Link from 'next/link';
// style
import { styles } from 'src/components/top/about/styles.css';

import aboutImage from 'public/images/01.webp';

export function TopAbout() {
  return (
    <div id='about'>
      <Image src={aboutImage} alt='About' aria-hidden='true' className={styles.img} />
      <div className={styles.content}>
        <h1 className={styles.title}>ABOUT</h1>
        <div className={styles.description}>経歴・趣味・スキルについて</div>
        <div className={styles.viewMoreWrapper}>
          <Link href={'/about'}>
            <span className={styles.viewMore}>VIEW MORE</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
