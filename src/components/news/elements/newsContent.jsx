// Next.js
import Link from 'next/link';

// styles
import { styles } from 'src/components/news/elements/newsContent.css';

export function NewsContent() {
  return (
    <ul className={styles.contentsWrapper}>
      <li className={styles.contentsList}>
        <time className={styles.contentsTime} dateTime='2023-3-25'>
          2023/03/25
        </time>
        <Link href={'/'} className={styles.newsContent}>
          News Contents
        </Link>
      </li>
      <li className={styles.contentsList}>
        <time className={styles.contentsTime} dateTime='2023-3-25'>
          2023/03/25
        </time>
        <Link href={'/'} className={styles.newsContent}>
          News Contents
        </Link>
      </li>
      <li className={styles.contentsList}>
        <time className={styles.contentsTime} dateTime='2023-3-25'>
          2023/03/25
        </time>
        <Link href={'/'} className={styles.newsContent}>
          News Contents
        </Link>
      </li>
    </ul>
  );
}
