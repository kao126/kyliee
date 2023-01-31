// components
import { Carousel } from "src/components/common/carousel";
import { TopNews } from "src/components/top/topNews";
import { TopContents } from "src/components/top/topContents";
import { TopColor } from "src/components/top/topColor";

// style
import styles from "src/components/top/main.module.css";

export function Main() {
  return (
    <main>
      <Carousel />
      <div className={styles.main}>
        <TopNews />
        <TopContents />
        <TopColor />
      </div>
    </main>
  );
}
