// style
import styles from "src/components/top/topNews.module.css";

export function TopNews() {
  return (
    <div className={styles.top_news_wrapper}>
      <div className={styles.title_wrapper}>
        <div></div>
        <h1>News</h1>
        <div className={styles.news_link}>過去の一覧</div>
      </div>
      <ul className={styles.contents_wrapper}>
        <li>News Contents</li>
        <li>News Contents</li>
        <li>News Contents</li>
      </ul>
    </div>
  );
}
