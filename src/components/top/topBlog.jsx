// Next.js
import Image from 'next/image';
// style
import styled from '@emotion/styled';

import { Card, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import NoImage from 'public/images/NO_IMAGE.jpg';

export function TopBlog() {
  return (
    <StyledWrapper>
      <div className='contents'>
        <h1 className='title_wrapper'>BLOG</h1>
        <div className='description'>ブログの説明</div>
        <Grid container className='grid_container'>
          <Grid item xs={12} md={6} className='grid_item'>
            <Card elevation={5} className='card'>
              <Link href={'/'} className='link'>
                <Image src={NoImage} className='img' />
                <Typography className='img_title'>１つ目の記事</Typography>
                <Typography className='img_date'>
                  <time dateTime='2023-4-3'>2023.04.03</time>
                </Typography>
              </Link>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} className='grid_item'>
            <Card elevation={5} className='card'>
              <Link href={'/'} className='link'>
                <Image src={NoImage} className='img' />
                <Typography className='img_title'>２つ目の記事</Typography>
                <Typography className='img_date'>
                  <time dateTime='2023-4-3'>2023.04.03</time>
                </Typography>
              </Link>
            </Card>
          </Grid>
        </Grid>
        <StyledLink href={'/blog'}>
          <span className='news_more'>VIEW MORE</span>
        </StyledLink>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled('div')`
  position: relative;
  margin-bottom: 100px;
  .title_wrapper {
    text-align: center;
    font-size: 90px;
    line-height: 1.3;
    letter-spacing: 0.12em;
    margin: 0;
    color: #333333;
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
  .card {
    padding: 16px;
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
  .img_date {
    position: relative;
    ::before {
      position: absolute;
      content: '';
      background-color: #fff;
      width: 30px;
      height: 5px;
      top: -5px;
      right: 35px;
      z-index: 1;
    }
    ::after {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      top: -20px;
      right: 20px;
      z-index: 1;
      border-style: solid;
      border-width: 16.5px 0px 16.5px 22.5px;
      border-color: transparent transparent transparent #fff;
    }
  }
  .link {
    position: relative;
    text-decoration: none;
    color: #333;
    ::after {
      position: absolute;
      content: '';
      display: block;
      width: 70px;
      height: 70px;
      top: 25px;
      right: 7px;
      background-color: #333;
      border-radius: 50%;
    }
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  width: 120px;
  color: #333333;
  text-decoration: none;
  text-align: right;
  right: 0;
  font-size: 1rem;
  padding-bottom: 5px;
  border-bottom: 1px solid #abbcc1;
`;
