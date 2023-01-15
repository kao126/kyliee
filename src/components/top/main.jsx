
// components
import { Carousel } from "src/components/common/carousel";
import { TopNews } from "src/components/top/topNews";

// style
import styles from "src/components/top/main.module.css";

export function Main() {
  return (
    <main className={styles.main}>
      <Carousel />
      <TopNews />
    </main>
  )
}
