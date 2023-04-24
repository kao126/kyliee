import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';

// components
import { Header } from 'src/components/common/header';
import { Footer } from 'src/components/common/footer';
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
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={4}>
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
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
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
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
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
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
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
          </Grid>
        </Grid>
      </StyledMain>
      <Footer />
    </>
  );
}

const StyledMain = styled('main')`
  width: 60%;
  margin: 0 auto;
  .title {
    text-align: center;
  }
  .img {
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
  }
`;
