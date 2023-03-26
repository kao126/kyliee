// Next.js
import Image from 'next/image';
// style
import styled from '@emotion/styled';

import Image1 from 'public/images/01.webp';
import Image2 from 'public/images/02.jpg';
import Image3 from 'public/images/03.webp';

const contents = [
  { image: Image1, description: 'あああ' },
  { image: Image2, description: 'いいい' },
  { image: Image3, description: 'ううう' },
];

export function TopContents() {
  return (
    <>
      {/* <StyledWrapper>
        <StyledImage src={Image1} alt='画像1' aria-hidden='true' />
        <div className='contents_description'>あああ</div>
      </StyledWrapper>
      <StyledWrapper>
        <StyledImage src={Image2} alt='画像2' aria-hidden='true' />
        <div className='contents_description'>いいい</div>
      </StyledWrapper>
      <StyledWrapper>
        <StyledImage src={Image3} alt='画像3' aria-hidden='true' />
        <div className='contents_description'>ううう</div>
      </StyledWrapper> */}
      {contents.map((contents, i) => {
        if (i % 2 === 0) {
          return (
            <StyledWrapper key={i}>
              <StyledImage src={contents.image} alt={`画像${i}`} aria-hidden='true' />
              <div className='contents_description'>
                <div>{contents.description}</div>
                <span className='news_more'>VIEW MORE</span>
              </div>
            </StyledWrapper>
          );
        } else {
          return (
            <StyledReverseWrapper key={i}>
              <StyledImage src={contents.image} alt={`画像${i}`} aria-hidden='true' />
              <div className='contents_description'>
                <div>{contents.description}</div>
                <span className='news_more'>VIEW MORE</span>
              </div>
            </StyledReverseWrapper>
          );
        }
      })}
    </>
  );
}

const StyledWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  .contents_description {
    width: 50%;
    position: relative;
    padding-left: 30px;
  }
  .news_more {
    position: absolute;
    width: 120px;
    text-align: right;
    right: 0;
    font-size: 1rem;
    padding-bottom: 5px;
    border-bottom: 1px solid #abbcc1;
  }
  @media screen and (max-width: 1024px) {
    display: block;
    .contents_description {
      width: 100%;
    }
  }
`;

const StyledReverseWrapper = styled('div')`
  display: flex;
  flex-direction: row-reverse;
  margin: 50px 0;
  .contents_description {
    width: 50%;
    position: relative;
  }
  .news_more {
    position: absolute;
    width: 120px;
    text-align: right;
    right: 30px;
    font-size: 1rem;
    padding-bottom: 5px;
    border-bottom: 1px solid #abbcc1;
  }
  @media screen and (max-width: 1024px) {
    display: block;
    .contents_description {
      width: 100%;
    }
  }
`;

const StyledImage = styled(Image)`
  max-width: 50%;
  height: auto;
  object-fit: cover;
  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;
