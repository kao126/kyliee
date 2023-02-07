// Next.js
import Image from 'next/image';
// style
import styled from '@emotion/styled';

import Image1 from 'public/images/TOP_01.webp';
import Image2 from 'public/images/TOP_02.jpg';
import Image3 from 'public/images/TOP_03.webp';

const images = [Image1, Image2, Image3];

export function TopContents() {
  return (
    <>
      {images.map((image, i) => {
        if (i % 2 === 0) {
          return (
            <StyledWrapper key={i}>
              <Image src={image} alt={`画像${i}`} width={600} height={450} object-fit='cover' aria-hidden='true' />
              <div className='contents_description'>あああ</div>
            </StyledWrapper>
          );
        } else {
          return (
            <StyledWrapper key={i}>
              <div className='contents_description'>あああ</div>
              <Image src={image} alt={`画像${i}`} width={600} height={450} object-fit='cover' aria-hidden='true' />
            </StyledWrapper>
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
`;
