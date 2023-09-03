// Next.js
import Image from 'next/image';
import Link from 'next/link';
// style
import styled from '@emotion/styled';

import Image1 from 'public/images/01.webp';
import Image2 from 'public/images/02.jpg';

export function TopContents() {
  return (
    <>
      <StyledWrapper>
        <StyledImage src={Image1} alt='About' aria-hidden='true' />
        <div className='content'>
          <h2 className='title'>ABOUT</h2>
          <div className='description'>経歴・趣味・スキルについて</div>
          <Link href={'/about'}>
            <span className='news_more'>VIEW MORE</span>
          </Link>
        </div>
      </StyledWrapper>
      <StyledWrapper reverse={true}>
        <StyledImage src={Image2} alt='Concept' aria-hidden='true' />
        <div className='content'>
          <h2 className='title'>CONCEPT</h2>
          <div className='description'>このポートフォリオについて</div>
          <Link href={'/concept'}>
            <span className='news_more'>VIEW MORE</span>
          </Link>
        </div>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled('div')`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'initial')};
  margin: 50px 0;
  .content {
    width: 50%;
    position: relative;
    padding: ${({ reverse }) => (reverse ? '0 60px 0 0' : '0 0 0 60px')};
    margin: auto;
  }
  .title {
    font-size: 7vw;
    line-height: 1.3;
    letter-spacing: 0.12em;
    margin: 0;
    color: #333333;
  }
  .description {
    margin: 20px 0 45px;
  }
  .news_more {
    position: absolute;
    width: 120px;
    color: #333333;
    text-align: right;
    right: ${({ reverse }) => (reverse ? '60px' : '0')};
    font-size: 1rem;
    padding-bottom: 5px;
    border-bottom: 1px solid #abbcc1;
  }
  @media screen and (max-width: 428px) {
    display: block;
    margin: 50px 0 80px;
    .content {
      width: 100%;
      padding-left: 0;
    }
    .title {
      font-size: 45px;
      letter-spacing: 0.03em;
    }
    .description {
      margin: 10px 0;
    }
    .news_more {
      right: 0;
    }
  }
`;

const StyledImage = styled(Image)`
  max-width: 50%;
  height: auto;
  object-fit: cover;
  @media screen and (max-width: 428px) {
    max-width: 100%;
  }
`;
