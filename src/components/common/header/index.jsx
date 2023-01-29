// React
import { useState } from "react";

// Next.js
import Image from "next/image";

// components
import { SideDrawer } from "src/components/common/sideDrawer";

// style
import styles from "src/components/common/header/header.module.css";
import Logo from "public/images/kyliee.png";

// Material-Ui
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export function Header({ isActive }) {
  const isDisplay = isActive ? styles.is_display : styles.is_not_display;
  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className={`${styles.header} ${isDisplay}`}>
        <div className={styles.logo}>
          <Image src={Logo} alt="logo" height={70} />
        </div>
        <ul className={styles.ul}>
          <li>About</li>
          <li>News</li>
          <li>Cart</li>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawer}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </ul>
      </header>
      <SideDrawer handleDrawer={handleDrawer} open={open} />
    </>
  );
}
