// components
import { NewsContent } from 'src/components/news/elements/newsContent';

// styles
import { styles } from 'src/components/news/styles.css';

export function News() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titleWrapper}>
        News<span className={styles.titleJp}>ニュース情報</span>
      </h1>
      <div className={styles.contentsWrapper}>
        <NewsContent />
      </div>
    </div>
  );
}
