// Next.js
import Image from 'next/image';
import Link from 'next/link';

// components
import { SideDrawer } from 'src/components/common/sideDrawer';

// hooks
import { useSideDrawer } from 'src/hooks/useSideDrawer';

// style
import { styles } from 'src/components/common/header/styles.css';

// images
import blackLogo from 'public/images/BLACK_LOGO.png';
import whiteLogo from 'public/images/WHITE_LOGO.png';

// Material-Ui
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// plugin
import { useAtomValue } from 'jotai';

// atom
import { isTopImageOnScreenAtom } from 'src/atoms/displayHeader';

export function Header({ isOpposite, BlackPainted = true }) {
  const isTopImageOnScreen = useAtomValue(isTopImageOnScreenAtom);
  const menuIcon = isOpposite ? styles.menuWhiteIcon : styles.menuBlackIcon;
  const { open, handleDrawer } = useSideDrawer();

  const logo = BlackPainted ? blackLogo : whiteLogo;

  return isTopImageOnScreen ? null : (
    <>
      <header className={styles.container}>
        <Link href={'/'}>
          <Image src={logo} alt='logo' className={styles.logo} />
        </Link>
        <IconButton color='inherit' aria-label='open drawer' className={styles.iconButton} onClick={handleDrawer}>
          <MenuIcon className={menuIcon} />
        </IconButton>
      </header>
      <SideDrawer handleDrawer={handleDrawer} open={open} />
    </>
  );
}
