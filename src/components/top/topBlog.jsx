// Next.js
import Link from 'next/link';
// hooks
import { useDateFormat } from 'src/hooks/useDateFormat';
// style
import styled from '@emotion/styled';
// material-ui
import { Card, Grid, Typography } from '@mui/material';
// images
import NoImage from 'public/images/NO_IMAGE.jpg';

export function TopBlog({ response }) {
  const { formatDate } = useDateFormat();

  const displayArticles = response.items.filter((_, i) => i <= 1);

  return (
    <StyledWrapper>
      <h1 className='title_wrapper'>BLOG</h1>
      <div className='description'>技術に関する記事</div>
      <Grid container className='grid_container'>
        {displayArticles.map((article, i) => (
          <Grid item xs={12} md={6} className='grid_item' key={i}>
            <Card elevation={5} className='card'>
              <Link href={`${article.link}`} className='link'>
                <img src={article.enclosure.url || NoImage.src} className='img' alt='イメージ画像' />
                <Typography className='img_title'>{article.title}</Typography>
                <div className='content'>
                  <Typography>
                    <time dateTime={`${formatDate(new Date(article.pubDate), 'yyyy-MM-dd')}`}>{formatDate(new Date(article.pubDate), 'yyyy.MM.dd')}</time>
                  </Typography>
                  <span className='content-btn'></span>
                </div>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
      <StyledLink href={'/blog'}>VIEW MORE</StyledLink>
    </StyledWrapper>
  );
}

const StyledWrapper = styled('div')`
  position: relative;
  margin-bottom: 100px;
  .title_wrapper {
    text-align: center;
    font-size: 7vw;
    line-height: 1.3;
    letter-spacing: 0.12em;
    margin: 0;
    color: #333333;
  }
  .description {
    text-align: center;
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
    border: thin solid lightgray;
    margin-bottom: 25px;
  }
  .content {
    display: flex;
    justify-content: space-between;
  }
  .img_title {
    color: #333;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.7;
    margin-bottom: 10px;
  }
  .link {
    position: relative;
    text-decoration: none;
    color: #333;
    display: block;
  }
  .content-btn {
    width: 50px;
    height: 50px;
    background-color: #333;
    border-radius: 50%;
    position: relative;
    ::before {
      position: absolute;
      content: '';
      background-color: #fff;
      width: 16px;
      height: 1px;
      top: 50%;
      right: 43%;
      z-index: 1;
    }
    ::after {
      position: absolute;
      content: '▷';
      font-size: 20px;
      color: #fff;
      top: 23%;
      right: 20%;
      z-index: 1;
    }
  }
  @media screen and (max-width: 1024px) {
    .title_wrapper {
      letter-spacing: 0.03em;
    }
  }
  @media screen and (max-width: 428px) {
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
