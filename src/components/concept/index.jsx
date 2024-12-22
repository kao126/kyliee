// Next.js
import Image from 'next/image';

// styles
import { styles } from 'src/components/concept/styles.css';

// images
import conceptImage from 'public/images/CONCEPT.jpg';

export function Concept() {
  return (
    <div className={styles.container}>
      <Image src={conceptImage} alt='コンセプト' className={styles.img} />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>Concept</h1>
          <p className={styles.description}>ここは、大嶋捷稔（おおしま かなる）の世界観を表現したポートフォリオです。</p>
          <p className={styles.description}>Welcome to my Portfolio designed by Kanaru Oshima </p>
        </div>
      </div>
    </div>
  );
}
