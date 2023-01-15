// Next.js
import Image from "next/image";
// style
import styles from "src/components/common/header/header.module.css";

import Logo from "public/images/kyliee.png"

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image 
          src={Logo}
          height={70}
        />
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>About</li>
        <li className={styles.li}>News</li>
        <li className={styles.li}>Cart</li>
        <li className={styles.li}>Menu</li>
      </ul>
    </header>
  )
}
