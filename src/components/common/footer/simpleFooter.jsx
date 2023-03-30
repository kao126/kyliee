import styled from '@emotion/styled';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
    color: #fff;
  }
`;
