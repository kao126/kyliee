// Next.js
import Image from "next/image";
// style
import styles from "src/components/top/topContents.module.css";

import Image1 from 'public/images/TOP_01.webp';
import Image2 from 'public/images/TOP_02.jpg';
import Image3 from 'public/images/TOP_03.webp';

const images = [Image1, Image2, Image3];

export function TopContents() {
  return (
    <>
      {images.map((image, i) => {
        if (i % 2 === 0) {
          return (
            <div className={styles.contents_wrapper} key={i}>
              <Image src={image} alt="test_image" width={600} height={450} object-fit="cover" aria-hidden="true" />
              <div className={styles.contents_description}>あああ</div>
            </div>
          );
        } else {
          return (
            <div className={styles.contents_wrapper} key={i}>
              <div className={styles.contents_description}>あああ</div>
              <Image src={image} alt={`画像${i}`} width={600} height={450} object-fit="cover" aria-hidden="true" />
            </div>
          );
        }
      })}
    </>
  );
}
