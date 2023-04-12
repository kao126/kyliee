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

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <StyledMain>
        <h1 className='title'>Blog</h1>
        <Grid container className='grid_container'>
          <Grid item xs={12} md={6} className='grid_item'>
            <Image src={NoImage} className='img' />
            <Typography variant='h3' component='h3' className='img_title'>
              １つ目の記事
            </Typography>
            <Typography className='img_date'>
              <time dateTime='2023-4-3'>2023.04.03</time>
            </Typography>
            <Link href={'/'} className='link'>
              ＋ 本文を読む
            </Link>
          </Grid>
          <Grid item xs={12} md={6} className='grid_item'>
            <Image src={NoImage} className='img' />
            <Typography className='img_title'>２つ目の記事</Typography>
            <Typography className='img_date'>
              <time dateTime='2023-4-3'>2023.04.03</time>
            </Typography>
            <Link href={'/'} className='link'>
              ＋ 本文を読む
            </Link>
          </Grid>
          <Grid item xs={12} md={6} className='grid_item'>
            <Image src={NoImage} className='img' />
            <Typography className='img_title'>３つ目の記事</Typography>
            <Typography className='img_date'>
              <time dateTime='2023-4-3'>2023.04.03</time>
            </Typography>
            <Link href={'/'} className='link'>
              ＋ 本文を読む
            </Link>
          </Grid>
          <Grid item xs={12} md={6} className='grid_item'>
            <Image src={NoImage} className='img' />
            <Typography className='img_title'>４つ目の記事</Typography>
            <Typography className='img_date'>
              <time dateTime='2023-4-3'>2023.04.03</time>
            </Typography>
            <Link href={'/'} className='link'>
              ＋ 本文を読む
            </Link>
          </Grid>
        </Grid>
      </StyledMain>
      <SimpleFooter />
    </>
  );
}

const StyledMain = styled('main')`
  .title {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding: 120px 0 40px;
  }
  .grid_container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
  .grid_item {
    position: relative;
    padding: 0 40px;
    margin: 40px 0;
  }
  .img {
    width: 100%;
    height: 300px;
    border: thin solid lightgray;
    margin-bottom: 25px;
    object-fit: cover;
  }
  .img_title {
    color: #333;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.7;
    margin-bottom: 10px;
  }
  .link {
    position: absolute;
    right: 40px;
    font-size: 20px;
    font-weight: 600;
    color: #333333;
    text-decoration: none;
    border-bottom: 1px solid #333;
    letter-spacing: 0.1em;
    line-height: 1.6;
  }
`;