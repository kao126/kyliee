import {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';

// components
import {Header} from 'src/components/common/header';
import {Footer} from 'src/components/common/footer';
import {SideDrawer} from 'src/components/common/sideDrawer';

// Hooks
import { useSideDrawer } from 'src/hooks/useSideDrawer';

// styles
import styled from '@emotion/styled';
import conceptImage from 'public/images/CONCEPT_01.jpg';

// Material-Ui
import {IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Concept() {
  const {open, handleDrawer} = useSideDrawer();
  return (
    <>
      <Head>
        <title>Concept</title>
      </Head>
      <Header />
      <StyledMain>
        <StyledImage src={conceptImage} alt='concept-image' />
        <div>
          <div className='description'>
            <IconButton color='inherit' aria-label='open drawer' onClick={handleDrawer}>
              <MenuIcon fontSize='large' />
            </IconButton>
            <h2>Concept</h2>
            <p>aaa</p>
            <Footer />
          </div>
        </div>
      </StyledMain>
      <SideDrawer handleDrawer={handleDrawer} open={open} />
    </>
  );
}

const StyledMain = styled('main')`
  display: flex;
  > div {
    background-color: #000;
    width: 50%;
    .description {
      color: #fff;
      width: 77%;
      margin: 0 auto;
      text-align: center;
    }
  }
`;

const StyledImage = styled(Image)`
  width: 50%;
  height: 100vh;
  object-fit: cover;
`;
