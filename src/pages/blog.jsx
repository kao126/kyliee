import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from '@next/font/google';

// components
import { Header } from 'src/components/common/header';
import { SimpleFooter } from 'src/components/common/footer/simpleFooter';
// modules
import { getZennArticles } from 'src/rss/rss-parser.mjs';
// import { getZennRssFeed } from 'src/modules/zenn';
import { getZennRssFeed } from 'src/rss/rss-parser.mjs';
// import { getZennRssFeed } from 'src/pages/api/hello';
import Parser from 'rss-parser';

// material-ui
import { Grid, Typography } from '@mui/material';
// styles
import styled from '@emotion/styled';
import NoImage from 'public/images/NO_IMAGE.jpg';

const inter = Inter({ subsets: ['latin'] });

export default function Blog({ res }) {
  const [articles, setArticles] = useState([]);
  console.log(articles.items);
  console.log(res);

  useEffect(() => {
    setArticles(res);
  }, []);

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
            <Image src={NoImage} className='img' alt='イメージ画像' />
            <Typography className='img_title'>{articles.items && articles.items[0].title}</Typography>
            <Typography className='img_date'>
              <time dateTime='2023-4-3'>{articles.items && articles.items[0].pubDate}</time>
            </Typography>
            <Link href={`${articles.items && articles.items[0].link}`} className='link'>
              ＋ 本文を読む
            </Link>
          </Grid>
          <Grid item xs={12} md={6} className='grid_item'>
            <Image src={NoImage} className='img' alt='イメージ画像' />
            <Typography className='img_title'>２つ目の記事</Typography>
            <Typography className='img_date'>
              <time dateTime='2023-4-3'>2023.04.03</time>
            </Typography>
            <Link href={'/'} className='link'>
              ＋ 本文を読む
            </Link>
          </Grid>
          <Grid item xs={12} md={6} className='grid_item'>
            <Image src={NoImage} className='img' alt='イメージ画像' />
            <Typography className='img_title'>３つ目の記事</Typography>
            <Typography className='img_date'>
              <time dateTime='2023-4-3'>2023.04.03</time>
            </Typography>
            <Link href={'/'} className='link'>
              ＋ 本文を読む
            </Link>
          </Grid>
          <Grid item xs={12} md={6} className='grid_item'>
            <Image src={NoImage} className='img' alt='イメージ画像' />
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

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const parser = new Parser();
  const res = await parser.parseURL('https://zenn.dev/kao126/feed?all=1');
  console.log(res);
  // const res = await fetch('https://zenn.dev/kao126/feed?all=1');
  // const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      res,
    },
  };
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
