import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from '@next/font/google';
import Parser from 'rss-parser';
// components
import { Header } from 'src/components/common/header';
import { SimpleFooter } from 'src/components/common/footer/simpleFooter';
// hooks
import { useDateFormat } from 'src/hooks/useDateFormat';
// material-ui
import { Grid, Typography } from '@mui/material';
// styles
import styled from '@emotion/styled';
import NoImage from 'public/images/NO_IMAGE.jpg';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Blog',
}

export default function Blog({ response }) {
  const { formatDate } = useDateFormat();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(response.items);
  }, []);

  return (
    <>
      <Header />
      <StyledMain>
        <h1 className='title'>Blog</h1>
        <Grid container className='grid_container'>
          {articles.map((article, i) => (
            <Grid item xs={12} md={6} className='grid_item' key={i}>
              <img src={article.enclosure.url || NoImage.src} className='img' alt='記事トップ画像' />
              <Typography className='img_title'>{article.title}</Typography>
              <Typography className='img_date'>
                <time dateTime={`${formatDate(new Date(article.pubDate), 'yyyy-MM-dd')}`}>{formatDate(new Date(article.pubDate), 'yyyy.MM.dd')}</time>
              </Typography>
              <Link href={`${article.link}`} className='link'>
                ＋ 本文を読む
              </Link>
            </Grid>
          ))}
        </Grid>
      </StyledMain>
      <SimpleFooter />
    </>
  );
}

export async function getStaticProps() {
  const parser = new Parser();
  const response = await parser.parseURL('https://zenn.dev/kao126/feed?all=1');
  return {
    props: {
      response,
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
    aspect-ratio: 40/21;
    border: thin solid lightgray;
    margin-bottom: 25px;
    object-fit: contain;
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
