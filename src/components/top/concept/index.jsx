// Next.js
import Image from 'next/image';
import Link from 'next/link';
// style
import { styles } from 'src/components/top/concept/styles.css';

import conceptImage from 'public/images/02.jpg';

export function TopConcept() {
  return (
    <div id='concept'>
      <Image src={conceptImage} alt='Concept' aria-hidden='true' className={styles.img} />
      <div className={styles.content}>
        <h2 className={styles.title}>CONCEPT</h2>
        <div className={styles.description}>このポートフォリオについて</div>
        <div className={styles.viewMoreWrapper}>
          <Link href={'/concept'}>
            <span className={styles.viewMore}>VIEW MORE</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
