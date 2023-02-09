// Next.js
import Image from 'next/image';
// style
import styled from '@emotion/styled';

import Image1 from 'public/images/TOP_01.webp';
import Image2 from 'public/images/TOP_02.jpg';
import Image3 from 'public/images/TOP_03.webp';

const contents = [
  {image: Image1, description: 'あああ'},
  {image: Image2, description: 'いいい'},
  {image: Image3, description: 'ううう'},
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
              <div className='contents_description'>{contents.description}</div>
            </StyledWrapper>
          );
        } else {
          return (
            <StyledReverseWrapper key={i}>
              <StyledImage src={contents.image} alt={`画像${i}`} aria-hidden='true' />
              <div className='contents_description'>{contents.description}</div>
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
