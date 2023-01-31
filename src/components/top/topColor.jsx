// style
import styles from "src/components/top/topColor.module.css";

// Material-Ui
import { Card } from "@mui/material";

export function TopColor() {
  return (
    <div>
      <h1 className={styles.title}>topColor</h1>
      <h4 className={styles.description}>トップカラーの説明</h4>
      <div className={styles.color_wrapper}>
        <Card className={styles.color_contents}>Red</Card>
        <Card className={styles.color_contents}>Blue</Card>
        {/* <div className={styles.color_contents}>Red</div>
        <div className={styles.color_contents}>Blue</div> */}
      </div>
    </div>
  );
}
