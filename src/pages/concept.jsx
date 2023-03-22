import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// components
import { Header } from 'src/components/common/header';
import { Footer } from 'src/components/common/footer';
import { SideDrawer } from 'src/components/common/sideDrawer';

// Hooks
import { useSideDrawer } from 'src/hooks/useSideDrawer';

// styles
import styled from '@emotion/styled';
import conceptImage from 'public/images/CONCEPT_01.jpg';

// Material-Ui
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Concept() {
  const { open, handleDrawer } = useSideDrawer();
  return (
    <>
      <Head>
        <title>Concept</title>
      </Head>
      <Header />
      <StyledMain>
        <StyledImage src={conceptImage} alt='concept-image' />
        <div>
          <div className='contents'>
            <StyledIconButton color='inherit' aria-label='open drawer' onClick={handleDrawer}>
              <MenuIcon fontSize='large' />
            </StyledIconButton>
            <h1 className='title'>Concept</h1>
            <p className='description'>ここは、大嶋捷稔（おおしま かなる）の世界観を表現したポートフォリオです。</p>
            <p className='description'>Welcome to my Portfolio produced by Kanaru Oshima </p>
          </div>
          <Footer className='footer' />
        </div>
      </StyledMain>
      <SideDrawer handleDrawer={handleDrawer} open={open} />
    </>
  );
}

const StyledMain = styled('main')`
  display: flex;
  background-color: #000;
  > div {
    width: 50%;
    align-self: center;
    .contents {
      color: #fff;
      width: 77%;
      margin: 0 auto 40px;
      text-align: center;
    }
    .title {
      padding-bottom: 70px;
      margin-bottom: 80px;
    }
    .description {
      margin: 0;
      font-size: 12px;
    }
  }
  .footer {

  }
`;

const StyledImage = styled(Image)`
  width: 50%;
  height: 100vh;
  object-fit: cover;
`;

const StyledIconButton = styled(IconButton)`
  position: fixed;
  right: 0;
  top: 0;
`;
