'use client';
import styled from '@emotion/styled';

export function SimpleFooter() {
  return (
    <StyledSimpleFooter>
      <div className='footer_text'>© KYLIEE All Rights Reserved.</div>
    </StyledSimpleFooter>
  );
}

const StyledSimpleFooter = styled('footer')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  background-color: #333333;
  .footer_text {
    color: #ddd;
  }
`;
