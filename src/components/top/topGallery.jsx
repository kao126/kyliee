// Next.js
import Image from 'next/image';
import Link from 'next/link';
// components
import { GalleryCarousel } from 'src/components/common/carousel/galleryCarousel';
// style
import styled from '@emotion/styled';
// material-ui
import { Card, Grid, Typography } from '@mui/material';
// images
import NoImage from 'public/images/NO_IMAGE.jpg';

export function TopGallery() {
  return (
    <StyledWrapper>
      <div className='contents'>
        <h1 className='title_wrapper'>GALLERY</h1>
        <div className='description'>ギャラリーの説明</div>
        <GalleryCarousel />
        <StyledLink href={'/gallery'}>VIEW MORE</StyledLink>
      </div>
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
  @media screen and (max-width: 1024px) {
    margin-bottom: 80px;
    .title_wrapper {
      letter-spacing: 0.03em;
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
