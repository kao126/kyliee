import styled from '@emotion/styled';
import { Modal } from '@mui/material';
import React from 'react';
import NoImage from 'public/images/NO_IMAGE.jpg';
import { TempCarousel } from 'src/components/common/carousel/tempCarousel';
import Link from 'next/link';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

const GalleryModal = ({ open, handleModal, galleryData }) => {
  // データを違うファイルにまとめてidなどで判別してモーダルは共通化する
  return (
    <Modal open={open} onClose={handleModal}>
      <StyledWrapper>
        <div className="description">
          <div className="title-bar">
            <span className="title">{galleryData.title}</span>
          </div>
          <div className="explanation">{galleryData.explanation}</div>
          <div className="title-bar">
            <span className="subtitle">使用言語など</span>
          </div>
          <p className="language">{galleryData.language}</p>
          <Link href={galleryData.url}>
            <LinkIcon />
          </Link>
          <Link href={galleryData.github}>
            <GitHubIcon />
          </Link>
        </div>
        <div className="img-wrapper">
          {/* <img src={NoImage.src} alt='イメージ画像' className='img' /> */}
          <TempCarousel />
        </div>
      </StyledWrapper>
    </Modal>
    //   <Modal open={open} onClose={handleModal}>
    //       <TempCarousel />
    // </Modal>
  );
};

const StyledWrapper = styled('div')`
  position: absolute;
  display: flex;
  justify-content: space-around;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 40px 30px;
  width: 70%;
  .description {
    width: 40%;
  }
  .title {
    position: relative;
    z-index: 1;
    background-color: #fff;
    font-size: 24px;
    font-weight: bold;
    padding: 0 10px;
  }
  .subtitle {
    position: relative;
    z-index: 1;
    background-color: #fff;
    font-size: 16px;
    padding: 0 10px;
  }
  .title-bar {
    position: relative;
    text-align: center;
    ::before {
      position: absolute;
      content: '';
      display: block;
      border-top: solid 1px #ddd;
      width: 100%;
      height: 1px;
      top: 50%;
    }
  }
  .language {
    white-space: pre-line;
  }
  .img-wrapper {
    width: 50%;
  }
  @media screen and (max-width: 428px) {
    flex-direction: column;
    width: 90%;
    .description {
      width: 100%;
    }
    .explanation {
      margin: 10px 0 20px;
    }
    .img-wrapper {
      width: 100%;
    }
  }
`;
export default GalleryModal;
