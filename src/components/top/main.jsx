// components
import {Carousel} from 'src/components/common/carousel';
import {TopNews} from 'src/components/top/topNews';
import {TopContents} from 'src/components/top/topContents';
import {TopColor} from 'src/components/top/topColor';

// style
import styled from '@emotion/styled';
import theme from 'src/theme';

export function Main() {
  return (
    <StyledMain>
      <Carousel />
      <StyledContainer>
        <TopNews />
        <TopContents />
      </StyledContainer>
      <TopColor />
    </StyledMain>
  );
}

const StyledMain = styled('main')`
  background-color: ${theme.palette.background.main};
`;

const StyledContainer = styled('div')`
  max-width: 1840px;
  width: 100%;
  padding: 0 10%;
`;
