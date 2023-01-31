// style
import styles from "src/components/top/topColor.module.css";

export function TopColor() {
  return (
    <div>
      <h1 className={styles.title}>topColor</h1>
      <div className={styles.color_wrapper}>
        <div className={styles.color_contents}>Red</div>
        <div className={styles.color_contents}>Blue</div>
      </div>
    </div>
  );
}
