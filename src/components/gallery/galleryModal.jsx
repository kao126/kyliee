import styled from '@emotion/styled';
import { Modal } from '@mui/material';
import React from 'react';

const GalleryModal = ({ open, handleModal }) => {
  return (
    <Modal open={open} onClose={handleModal}>
      <StyledWrapper>
        <div className='flex'>
          <div>説明枠</div>
          <div>画像枠</div>
        </div>
      </StyledWrapper>
    </Modal>
  );
};

const StyledWrapper = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #fff;
  .flex {
    display: flex;
    width: 60%;
    height: 60%;
  }
`;
export default GalleryModal;
