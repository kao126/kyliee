'use client';
// Next.js
import { Inter } from 'next/font/google';
// React.js
import { useState } from 'react';
// components
import GalleryModal from 'src/components/gallery/galleryModal';
// material-ui
import { Box, Grid } from '@mui/material';
// styles
import styled from '@emotion/styled';
import NoImage from 'public/images/NO_IMAGE.jpg';

const inter = Inter({ subsets: ['latin'] });

const galleryDataLists = [
  {
    id: 1,
    title: 'Kn_Bn',
    explanation: 'This is ToDo management app. You can manage your tasks on the Kanban Board for free. You will see how your tasks progress.',
    language: 'Next.js _ 14.2.4 \n react _ 18.3.1 \n typescript _ 5.5.3',
    url: 'https://kn-bn.vercel.app/',
    github: 'https://github.com/kao126/Kn_Bn',
  },
  {
    id: 2,
    title: 'title',
    explanation:
      'サイト説明。Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus aliquam, praesentium error itaque incidunt mollitia placeat porro, pariatur eveniet fugit dolore dolorum! Aperiam cupiditate libero minus omnis dicta! Veniam, dolor.',
    language: 'Ruby on Rails, HTML/CSS(SASS), Bulma, jQuery, Sqlite（開発）, Postgresql（本番）, Heroku, SendGrid',
    url: 'https://kyliee.vercel.app/',
    github: 'https://github.com/kao126/kyliee',
  },
];


export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [galleryData, setGalleryData] = useState(null);
  const handleModal = (id) => {
    const targetGalleryData = galleryDataLists.find((data) => data.id === id);
    setGalleryData(targetGalleryData);
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <StyledMain>
        <h1 className='title'>Galley</h1>
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className='item'>
              <img src={NoImage.src} className='img' alt='イメージ画像' />
              <Box className='gallery' onClick={() => handleModal(1)}>
                <p className='item-title'>Kn_Bn</p>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='item'>
              <img src={NoImage.src} className='img' alt='イメージ画像' />
              <Box className='gallery' onClick={() => handleModal(2)}>
                <p className='item-title'>タイトル１</p>
              </Box>
            </div>
          </Grid>
        </Grid>
      </StyledMain>
      {galleryData && <GalleryModal open={open} handleModal={handleModal} galleryData={galleryData} />}
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
