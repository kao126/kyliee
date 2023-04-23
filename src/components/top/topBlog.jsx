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
        <StyledLink href={'/blog'}>一覧をみる</StyledLink>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled('div')`
  .title_wrapper {
    text-align: center;
    font-size: 90px;
    line-height: 1.3;
    letter-spacing: 0.12em;
    margin: 0;
    color: #333333;
    .title_jp {
      font-size: 1rem;
      margin-left: 1rem;
    }
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

const StyledLink = styled(Link)`
  display: block;
  border: 1px solid rgba(37, 42, 44, 0.5);
  border-radius: 2px;
  padding: 15px;
  max-width: 230px;
  color: #000;
  letter-spacing: 0.03rem;
  text-decoration: none;
  margin: 0 auto;
  text-align: center;
  :hover {
    opacity: 0.7;
  }
`;
