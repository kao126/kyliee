import styled from '@emotion/styled';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export function Footer() {
  return <StyledFooter>Footer</StyledFooter>;
}

const StyledFooter = styled('footer')`
  position: fixed;
  bottom: 10px;
  color: #646464;
`;
