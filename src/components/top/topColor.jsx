// Next.js
import Image from 'next/image';
import Link from 'next/link';

// style
import styled from '@emotion/styled';

// Material-Ui
import {Card} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import {red, indigo} from '@mui/material/colors';

const red_050 = red[50];
const red_400 = red[400];

const indigo_050 = indigo[50];
const indigo_400 = indigo[400];

export function TopColor() {
  return (
    <StyledWrapper>
      <h1 className='title'>topColor</h1>
      <h4 className='description'>トップカラーの説明</h4>
      <div className='color_wrapper'>
        <StyledCard red='true'>
          <GitHubIcon sx={{fontSize: 80}} />
          <div>
            <div className='subtitle'>Red</div>
            <StyledLink href={'https://github.com/kao126'} red='true'>
              Git Hubへ
            </StyledLink>
          </div>
        </StyledCard>
        <StyledCard>
          <GitHubIcon sx={{fontSize: 80}} />
          <div>
            <div className='subtitle'>Blue</div>
            <StyledLink href={'https://github.com/kao126'}>
              Git Hubへ
            </StyledLink>
          </div>
        </StyledCard>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled('div')`
  .title {
    text-align: center;
    border-bottom: 3px solid #ccc;
    margin-bottom: 1rem;
  }
  .description {
    text-align: center;
    margin-bottom: 2rem;
  }
  .color_wrapper {
    display: flex;
    justify-content: space-around;
    text-align: center;
    width: 80%;
    margin: 0 auto;
  }
  .subtitle {
    margin-bottom: 1rem;
  }
`;

const StyledCard = styled(Card)`
  width: 40%;
  height: 240px;
  border-radius: 15px;
  /* border-radius: 50% 20% / 10% 40%; */
  /* background-color: ${({red}) => (red ? red_050 : indigo_050)}; */
  border: 1.5px solid ${({red}) => (red ? red_400 : indigo_400)};
  font-size: 18px;
  color: ${({red}) => (red ? red_400 : indigo_400)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  background-color: ${({red}) => (red ? red_400 : indigo_400)};
  border-radius: 50px;
  padding: 10px 20px;
  color: #fff;
`;
