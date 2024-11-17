// Next.js
import Link from 'next/link';

// styles
import { styles } from 'src/components/top/news/styles.css';

export function TopNews() {
  return (
    <div id='news'>
      <h1 className={styles.titleWrapper}>
        News<span className={styles.titleJp}>最新情報</span>
      </h1>
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
      <Link href={'/news'} className={styles.newsMore}>
        <span>ニュース一覧をみる</span>
      </Link>
    </div>
  );
}
