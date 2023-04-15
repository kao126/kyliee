// Next.js
import Image from 'next/image';
// style
import styled from '@emotion/styled';

import blogImg from 'public/images/BLOG.jpg';
import { Button } from '@mui/material';
import Link from 'next/link';

export function TopBlog() {
  return (
    <StyledWrapper>
      <div className='img_container'>
        <Image src={blogImg} alt='ブログ画像' className='img' />
      </div>
      <div className='contents'>
        <h2 className='title'>BLOG</h2>
        <div className='description'>ブログの説明</div>
        <StyledLink href={'/blog'}>ブログをみる</StyledLink>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled('div')`
  display: flex;
  height: 500px;
  background-color: #eaeaea;
  .img_container {
    position: relative;
    width: 50%;
  }
  .img {
    position: absolute;
    width: 70%;
    height: auto;
    top: 65px;
    left: 70px;
    object-fit: cover;
    transform: rotate(3.35deg);
  }
  .contents {
    width: 50%;
  }
  .title {
    font-size: 90px;
    line-height: 1.3;
    letter-spacing: 0.12em;
    margin: 0;
    color: #333333;
  }
  .description {
  }
  @media screen and (max-width: 425px) {
  }
`;

const StyledLink = styled(Link)`
  background-color: #fff;
  color: #333333;
  display: inline-block;
  width: 250px;
  height: 50px;
  border: 1px solid #333333;
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
  text-decoration: none;
`;
