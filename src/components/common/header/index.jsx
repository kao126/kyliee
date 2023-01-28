// React
import { useState } from "react";

// Next.js
import Image from "next/image";

// style
import styles from "src/components/common/header/header.module.css";
import Logo from "public/images/kyliee.png";

// Material-Ui
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export function Header({ isActive }) {
  const isDisplay = isActive ? styles.is_display : styles.is_not_display;
  const drawerWidth = 240;
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${isDisplay}`}>
        <div className={styles.logo}>
          <Image src={Logo} alt="logo" height={70} />
        </div>
        <ul className={styles.ul}>
          <li className={styles.li}>About</li>
          <li className={styles.li}>News</li>
          <li className={styles.li}>Cart</li>
          <li className={styles.li}>
            <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerOpen} sx={{ ...(open && { display: "none" }) }}>
              <MenuIcon />
            </IconButton>
          </li>
        </ul>
      </header>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        {/* <DrawerHeader> */}
        <IconButton onClick={handleDrawerClose}></IconButton>
        {/* </DrawerHeader> */}
      </Drawer>
    </>
  );
}
