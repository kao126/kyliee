// style
import styled from '@emotion/styled';

// Material-Ui
import {Card} from '@mui/material';
import {red, indigo} from '@mui/material/colors';
import {flexbox} from '@mui/system';

const red_bgcolor = red[50];
const red_border = red[400];

const indigo_bgcolor = indigo[50];
const indigo_border = indigo[400];

export function TopColor() {
  return (
    <StyledWrapper>
      <h1 className='title'>topColor</h1>
      <h4 className='description'>トップカラーの説明</h4>
      <div className='color_wrapper'>
        <StyledCard>Red</StyledCard>
        <StyledCard sx={{bgcolor: indigo_bgcolor, border: 1.5, borderColor: indigo_border}}>Blue</StyledCard>
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
`;

const StyledCard = styled(Card)`
  width: 40%;
  height: 240px;
  /* border: 3px solid #ccc; */
  border-radius: 15px;
  background-color: red_bgcolor;
  border: ${({red_bgcolor}) => red_border} 1.5 solid;
  font-size: 36px;
  color: red_border;
  display: flex;
  align-items: center;
  justify-content: center;
`;
