// React
import { useState } from 'react';

// Next.js
import Image from 'next/image';
import Link from 'next/link';

// components
import { SideDrawer } from 'src/components/common/sideDrawer';

// Hooks
import { useSideDrawer } from 'src/hooks/useSideDrawer';

// style
import styled from '@emotion/styled';
import blackLogo from 'public/images/BLACK_LOGO.png';
import whiteLogo from 'public/images/WHITE_LOGO.png';

// Material-Ui
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export function Header({ isActive, isSpecified, color, BlackPainted = true }) {
  const isDisplay = isActive ? 'is_display' : 'is_not_display';
  const { open, handleDrawer } = useSideDrawer();

  const logo = BlackPainted ? blackLogo : whiteLogo;

  return (
    <>
      <StyledHeader className={isDisplay} props={{ isSpecified, color }}>
        <Link href={'/'}>
          <Image src={logo} alt='logo' className='logo' />
        </Link>
        <IconButton color='inherit' aria-label='open drawer' className='icon_button' onClick={handleDrawer}>
          <MenuIcon className='menu-icon' />
        </IconButton>
      </StyledHeader>
      <SideDrawer handleDrawer={handleDrawer} open={open} />
    </>
  );
}

const StyledHeader = styled('header')`
  .is_display {
    opacity: 1;
  }

  .is_not_display {
    opacity: 0;
  }

  .logo {
    position: fixed;
    max-width: 200px;
    height: auto;
    padding: 16px;
  }
  .icon_button {
    position: fixed;
    right: 0;
    padding: 12px;
    .menu-icon {
      font-size: 3rem;
      color: ${({ props }) => (props.isSpecified ? props.color : `#333333`)};
    }
  }
  @media screen and (max-width: 425px) {
    .logo {
      padding: 16px 8px;
    }
    .icon_button {
      padding: 16px;
    }
  }
`;
