// Next.js
import Image from "next/image";
// style
// import styles from "src/components/top/topContents.module.css";

import Image1 from "public/images/test1.jpg";
import Image2 from "public/images/test2.jpg";
import Image3 from "public/images/test3.jpg";

const images = [Image1, Image2, Image3];

export function TopContents() {
  return (
    <>
      {images.map((image, i) => {
        return (
          <Image
            src={image}
            key={i}
            alt="test_image"
            width={600}
            height={450}
            object-fit="cover"
            aria-hidden="true"
          />
        );
      })}
    </>
  );
}
