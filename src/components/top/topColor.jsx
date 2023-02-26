// Next.js
import Image from 'next/image';
import Link from 'next/link';

// style
import styled from '@emotion/styled';

// Material-Ui
import {Card} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import {red, indigo} from '@mui/material/colors';

import topColorImg from 'public/images/TOP_COLOR_01.jpg';

const red_050 = red[50];
const red_400 = red[400];

const indigo_050 = indigo[50];
const indigo_400 = indigo[400];

export function TopColor() {
  return (
    <StyledWrapper>
      <Image src={topColorImg} className='img' />
      <div className='color_wrapper'>
        <h1 className='title'>大切な人への贈り物に、 Mr. CHEESECAKE を。</h1>
        <h4 className='description'>シーンや贈る相手に合わせて、様々なギフトの形をご用意しております。</h4>
        <StyledLink href={'https://github.com/kao126'}>Mr. CHEESECAKE Gift Collections</StyledLink>
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
    text-align: center;
    max-width: 500px;
    padding: 0 40px 0 75px;
  }
  .title {
    border-bottom: 3px solid #ccc;
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
  border: 1px solid rgba(37, 42, 44, 0.16);
  border-radius: 2px;
  padding: 15px 40px 15px 24px;
  letter-spacing: 0.03rem;
`;
