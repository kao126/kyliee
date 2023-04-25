// Next.js
import Image from 'next/image';
import Link from 'next/link';
// style
import styled from '@emotion/styled';
// material-ui
import { Card, Grid, Typography } from '@mui/material';
// images
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
                <Image src={NoImage} className='img' alt='イメージ画像' />
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
                <Image src={NoImage} className='img' alt='イメージ画像' />
                <Typography className='img_title'>２つ目の記事</Typography>
                <Typography className='img_date'>
                  <time dateTime='2023-4-3'>2023.04.03</time>
                </Typography>
              </Link>
            </Card>
          </Grid>
        </Grid>
        <StyledLink href={'/blog'}>VIEW MORE</StyledLink>
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
      width: 16px;
      height: 1px;
      top: -9.5px;
      right: 30px;
      z-index: 1;
    }
    ::after {
      position: absolute;
      content: '▷';
      font-size: 20px;
      color: #fff;
      top: -23px;
      right: 17px;
      z-index: 1;
    }
    /* ::before {
      position: absolute;
      content: '';
      background-color: #fff;
      width: 15px;
      height: 1px;
      top: -9px;
      right: 30px;
      z-index: 1;
    }
    ::after {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      top: -14px;
      right: 21px;
      z-index: 1;
      border-style: solid;
      border-width: 5.5px 0px 5.5px 7.5px;
      border-color: transparent transparent transparent #fff;
    } */
    /* ::before {
      position: absolute;
      content: '▷';
      color: #fff;
      font-size: 28px;
      top: -28px;
      right: 16px;
      z-index: 1;
    } */
  }
  .link {
    position: relative;
    text-decoration: none;
    color: #333;
    ::after {
      position: absolute;
      content: '';
      display: block;
      width: 50px;
      height: 50px;
      top: 30px;
      right: 7px;
      background-color: #333;
      border-radius: 50%;
    }
  }
  @media screen and (max-width: 428px) {
    .title_wrapper {
      font-size: 45px;
      letter-spacing: 0.03em;
    }
    .grid_item {
      padding: 0;
      margin: 15px 0 45px;
    }
    .img {
      height: 150px;
    }
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  width: 120px;
  color: #333333;
  text-decoration: none;
  text-align: center;
  right: 0;
  left: 0;
  margin: auto;
  font-size: 1rem;
  padding-bottom: 5px;
  border-bottom: 1px solid #abbcc1;
  transition: 0.5s;
  overflow: hidden;
  ::before {
    position: absolute;
    content: '';
    width: 120%;
    height: 100%;
    background-color: #efefef;
    left: 0;
    transition: transform 0.5s;
    transform-origin: right top;
    transform: skewX(-30deg) scale(0, 1);
    z-index: -1;
  }
  :hover {
    ::before {
      transform-origin: left top;
      transform: skewX(-30deg) scale(1, 1);
    }
  }
`;
