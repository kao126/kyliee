// Next.js
import Image from 'next/image';
import Link from 'next/link';

// style
import styled from '@emotion/styled';

// Material-Ui
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import topColorImg from 'public/images/TOP_COLOR_01.jpg';

export function TopColor() {
  return (
    <StyledWrapper>
      <Image src={topColorImg} className='img' alt='color-palette' />
      <div className='color_wrapper'>
        <h1 className='title'>楽しい色の世界へようこそ</h1>
        <h4 className='description'>ご利用のシーンに合わせて、様々な配色をご用意しております。</h4>
        <StyledLink href={'/colors'}>
          <span>Kyliee&apos;s Color-Palette Collections</span>
          <KeyboardArrowRightIcon />
        </StyledLink>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, 50%);
  background-color: #fff;
  width: 100%;
  align-items: center;
  .img {
    width: 100%;
    height: auto;
  }
  .color_wrapper {
    max-width: 500px;
    padding: 0 40px 0 75px;
  }
  .title {
    margin-bottom: 1rem;
  }
  .description {
    margin-bottom: 2rem;
  }
  .subtitle {
    margin-bottom: 1rem;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(37, 42, 44, 0.16);
  border-radius: 2px;
  padding: 15px 15px 15px 24px;
  margin-right: 55px;
  color: #000;
  letter-spacing: 0.03rem;
  text-decoration: none;
  :hover {
    opacity: 0.7;
  }
`;
