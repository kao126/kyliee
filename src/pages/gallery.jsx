import Head from 'next/head';
import { Inter } from '@next/font/google';

// components
import { Header } from 'src/components/common/header';
import { SimpleFooter } from 'src/components/common/footer/simpleFooter';
// material-ui
import { Box, Grid } from '@mui/material';
// styles

import NoImage from 'public/images/NO_IMAGE.jpg';
import styled from '@emotion/styled';
import GalleryModal from 'src/components/gallery/galleryModal';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      <Header />
      <StyledMain>
        <h1 className='title'>Galley</h1>
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className='item'>
              <img src={NoImage.src} className='img' alt='イメージ画像' />
              <Box className='gallery' onClick={handleModal}>
                <p className='item-title'>タイトル１</p>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='item'>
              <img src={NoImage.src} className='img' alt='イメージ画像' />
              <Box className='gallery' onClick={handleModal}>
                <p className='item-title'>タイトル１</p>
              </Box>
            </div>
          </Grid>
        </Grid>
      </StyledMain>
      <SimpleFooter />
      <GalleryModal open={open} handleModal={handleModal} />
    </>
  );
}

const StyledMain = styled('main')`
  width: 80%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 120px 0 0;
  .title {
    text-align: center;
  }
  .item {
    position: relative;
    padding: 15px;
    .gallery {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
    .item-title {
      display: none;
    }
    .gallery:hover {
      opacity: 1;
      text-decoration: none;
      background: rgba(0, 0, 0, 0.5);
      .item-title {
        display: block;
        position: absolute;
        bottom: 30px;
        left: 50px;
        color: #fff;
      }
    }
  }
  .img {
    position: relative;
    display: block;
    width: 100%;
    border: thin solid lightgray;
    z-index: -1;
  }
`;
