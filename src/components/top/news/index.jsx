// Next.js
import Link from 'next/link';

// components
import { NewsContent } from 'src/components/news/elements/newsContent';

// styles
import { styles } from 'src/components/top/news/styles.css';

export function TopNews() {
  return (
    <div id='news'>
      <h1 className={styles.titleWrapper}>
        News<span className={styles.titleJp}>最新情報</span>
      </h1>
      <NewsContent />
      <Link href={'/news'} className={styles.newsMore}>
        <span>ニュース一覧をみる</span>
      </Link>
    </div>
  );
}
