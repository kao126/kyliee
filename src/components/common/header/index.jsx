// Next.js
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
import { useEffect, useState } from 'react';

export function Header() {
  const pathname = usePathname();
  const isTopImageOnScreen = useAtomValue(isTopImageOnScreenAtom);
  const [isWhiteLogo, setIsWhiteLogo] = useState(false);
  const menuIcon = isWhiteLogo ? styles.menuWhiteIcon : styles.menuBlackIcon;
  const headerBg = isWhiteLogo ? styles.transparentBg : styles.whiteBg;
  const { open, handleDrawer } = useSideDrawer();

  const logo = isWhiteLogo ? whiteLogo : blackLogo;

  useEffect(() => {
    if (pathname == '/concept') {
      setIsWhiteLogo(true);
    } else {
      setIsWhiteLogo(false);
    }
  }, [pathname]);

  return isTopImageOnScreen ? null : (
    <>
      <header className={`${styles.container} ${headerBg}`}>
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
