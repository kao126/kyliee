import styled from '@emotion/styled';
import { Modal } from '@mui/material';
import React from 'react';
import NoImage from 'public/images/NO_IMAGE.jpg';

const GalleryModal = ({ open, handleModal }) => {
  // データを違うファイルにまとめてidなどで判別してモーダルは共通化する
  return (
    <Modal open={open} onClose={handleModal}>
      <StyledWrapper>
        <div className='description'>
          <div className='title-bar'>
            <span className='title'>title</span>
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus aliquam, praesentium error itaque incidunt mollitia placeat porro, pariatur eveniet fugit dolore
            dolorum! Aperiam cupiditate libero minus omnis dicta! Veniam, dolor.
          </div>
          <div className='title-bar'>
            <span className='subtitle'>使用言語など</span>
          </div>
          <p>Ruby on Rails, HTML/CSS(SASS), Bulma, jQuery, Sqlite（開発）, Postgresql（本番）, Heroku, SendGrid</p>
        </div>
        <div className='img-wrapper'>
          <img src={NoImage.src} alt='イメージ画像' className='img' />
        </div>
      </StyledWrapper>
    </Modal>
  );
};

const StyledWrapper = styled('div')`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 40px 30px;
  min-width: 50%;
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
  .img-wrapper {
    width: 60%;
    .img {
      width: 100%;
    }
  }
`;
export default GalleryModal;
