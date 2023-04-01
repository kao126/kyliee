import styled from '@emotion/styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import Link from 'next/link';
import Wantedly from 'public/images/Wantedly.png';

export function Footer() {
  return (
    <StyledFooter>
      <Link href={'https://github.com/kao126'}>
        <GitHubIcon className='github' />
      </Link>
      <Link href={'https://www.wantedly.com/id/kanaru_oshima'}>
        <Image src={Wantedly} alt='wantedly' className='wantedly' />
      </Link>
      <div className='footer_text'>© KYLIEE All Rights Reserved.</div>
    </StyledFooter>
  );
}

const StyledFooter = styled('footer')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  background-color: #333333;
  .footer_text {
    color: #fff;
  }
  .github {
    color: #fff;
    font-size: 38px;
  }
  .wantedly {
    width: 56px;
    height: auto;
  }
`;
