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
import Logo from 'public/images/kyliee.png';

// Material-Ui
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export function Header({ isActive }) {
  const isDisplay = isActive ? 'is_display' : 'is_not_display';
  const { open, handleDrawer } = useSideDrawer();

  return (
    <>
      <StyledHeader className={isDisplay}>
        <div className='logo'>
          <Image src={Logo} alt='logo' height={70} />
        </div>
        <IconButton color='inherit' aria-label='open drawer' onClick={handleDrawer}>
          <MenuIcon className='menu-icon' />
        </IconButton>
      </StyledHeader>
      <SideDrawer handleDrawer={handleDrawer} open={open} />
    </>
  );
}

const StyledHeader = styled('header')`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  position: fixed;
  z-index: 9999;
  .is_display {
    opacity: 1;
  }

  .is_not_display {
    opacity: 0;
  }

  .logo {
    width: 15%;
    align-self: flex-end;
  }
  .menu-icon {
    font-size: 3rem;
    color: #333;
  }
`;
