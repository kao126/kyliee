
// components
import { Carousel } from "src/components/common/carousel";

// style
import styles from "src/components/top/main.module.css";

export function Main() {
  return (
    <main className={styles.main}>
      <Carousel />
    </main>
  )
}
