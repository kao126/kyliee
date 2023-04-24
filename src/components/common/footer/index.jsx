import styled from '@emotion/styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import Link from 'next/link';
import Wantedly from 'public/images/Wantedly_W.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function Footer() {
  return (
    <StyledFooter>
      <Link href={'/'}>
        <LinkedInIcon className='linkedin' />
      </Link>
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
    margin: 0 5px;
  }
  .github {
    color: #fff;
    font-size: 38px;
    margin: 0 5px;
  }
  .wantedly {
    width: 56px;
    height: auto;
  }
  .linkedin {
    color: #fff;
    font-size: 42px;
    margin: 0 5px;
  }
`;
