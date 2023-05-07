import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';

// components
import { Header } from 'src/components/common/header';
import { SimpleFooter } from 'src/components/common/footer/simpleFooter';
// material-ui
import { Grid, Typography } from '@mui/material';
// styles

import NoImage from 'public/images/NO_IMAGE.jpg';
import styled from '@emotion/styled';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Gallery() {
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
              <Link href={'/gallery'} className='gallery'>
                <p className='item-title'>タイトル１</p>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='item'>
              <img src={NoImage.src} className='img' alt='イメージ画像' />
              <Link href={'/'} className='gallery'>
                <p className='item-title'>タイトル１</p>
              </Link>
            </div>
          </Grid>
          {/* <Grid item xs={12} md={6} lg={4}>
            <Image src={NoImage} className='img' alt='イメージ画像' />
            <Typography className='img-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut hic eius suscipit quasi adipisci earum laboriosam perspiciatis error tempora quae praesentium
              sit, facere nostrum reprehenderit quaerat, blanditiis fugit culpa.
            </Typography>
            <div className='link'>
              <Link href={'/'} className='more'>
                more
              </Link>
            </div>
          </Grid> */}
        </Grid>
      </StyledMain>
      <SimpleFooter />
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
      :hover {
        opacity: 1;
        text-decoration: none;
        background: rgba(0, 0, 0, 0.5);
        .item-title {
          position: absolute;
          bottom: 30px;
          left: 50px;
          color: #fff;
        }
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
  /* .img {
    width: 100%;
    height: auto;
    border: thin solid lightgray;
    margin-bottom: 30px;
  }
  .img-description {
    color: #333;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .link {
    text-align: right;
    .more {
      display: inline-block;
      font-size: 14px;
      color: #333;
      letter-spacing: 0.1rem;
      padding: 8px 12px;
      background-color: #eee;
      text-decoration: none;
      text-align: right;
      :hover {
        text-decoration: underline;
      }
    }
  } */
`;
