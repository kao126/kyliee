'use client';
import { useState } from 'react';
import Image from 'next/image';

// components
import { Header } from 'src/components/common/header';
import { SideDrawer } from 'src/components/common/sideDrawer';
// import { PageContainer } from 'src/components/common/pageContainer';

// Hooks
import { useSideDrawer } from 'src/hooks/useSideDrawer';

// styles
import styled from '@emotion/styled';
import conceptImage from 'public/images/CONCEPT.jpg';

// Material-Ui
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Concept() {
  const { open, handleDrawer } = useSideDrawer();
  return (
    <>
      <Header isOpposite={true} BlackPainted={false} />
      {/* <PageContainer> */}
      <StyledMain>
        <StyledImage src={conceptImage} alt='コンセプト' />
        <div>
          <div className='contents'>
            {/* <StyledIconButton color='inherit' aria-label='open drawer' onClick={handleDrawer}>
              <MenuIcon fontSize='large' />
            </StyledIconButton> */}
            <h1 className='title'>Concept</h1>
            <p className='description'>ここは、大嶋捷稔（おおしま かなる）の世界観を表現したポートフォリオです。</p>
            <p className='description'>Welcome to my Portfolio designed by Kanaru Oshima </p>
          </div>
          {/* <Footer className='footer' /> */}
        </div>
      </StyledMain>
      {/* </PageContainer> */}
      <SideDrawer handleDrawer={handleDrawer} open={open} />
    </>
  );
}

const StyledMain = styled('main')`
  display: flex;
  background-color: #333;
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
  /* .footer {
  } */
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
      .title {
        margin-top: 180px;
        margin-bottom: 50px;
      }
      .contents {
        margin: 0 auto 80px;
      }
    }
  }
  @media screen and (max-width: 428px) {
    .title {
      margin-top: 160px;
    }
  }
`;

const StyledImage = styled(Image)`
  width: 50%;
  height: 100vh;
  object-fit: cover;
  object-position: bottom;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const StyledIconButton = styled(IconButton)`
  position: fixed;
  right: 0;
  top: 0;
`;
