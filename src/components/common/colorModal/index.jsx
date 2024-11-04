'use client';
import React from 'react';
import { SketchPicker } from 'react-color';
import styled from '@emotion/styled';
import { Modal } from '@mui/material';

export function ColorModal({ open, onClose, color, onChange, title }) {
  return (
    <StyledModal open={open} onClose={onClose}>
      <div className='picker-contents'>
        <h4>{title}</h4>
        <SketchPicker color={color} onChange={onChange} />
      </div>
    </StyledModal>
  );
}

const StyledModal = styled(Modal)`
  .picker-contents {
    width: fit-content;
    margin: 0 auto;
  }
`;
