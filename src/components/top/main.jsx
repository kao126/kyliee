import Image from 'next/image';

// components
import { Carousel } from 'src/components/common/carousel';
import { TopNews } from 'src/components/top/topNews';
import { TopContents } from 'src/components/top/topContents';
import { TopColor } from 'src/components/top/topColor';
import { TopBlog } from 'src/components/top/topBlog';

// style
import styled from '@emotion/styled';
import theme from 'src/theme';

// material-ui
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';

// image
import topImage from 'public/images/TOP_01.jpg';

export function Main() {
  return (
    <StyledMain>
      <div className='sns-area'>
        <p className='sns-title'>SNS</p>
        <ul className='sns-list'>
          <li className='sns-contents'>
            <FacebookRoundedIcon />
          </li>
          <li className='sns-contents'>
            <InstagramIcon />
          </li>
          <li className='sns-contents'>
            <TwitterIcon />
          </li>
        </ul>
      </div>
      {/* <Carousel /> */}
      <Image src={topImage} alt='トップ画像' className='top_image' />
      <StyledContainer>
        <TopNews />
        <TopContents />
      </StyledContainer>
      <TopColor />
      <TopBlog />
    </StyledMain>
  );
}

const StyledMain = styled('main')`
  /* background-color: ${theme.palette.background.main}; */
  background-color: #fff;
  .top_image {
    width: 100%;
    height: 100vh;
    object-fit: contain;
  }
  .sns-area {
    position: fixed;
    bottom: 120px;
    right: 35px;
    z-index: 1;
    .sns-title {
      writing-mode: vertical-rl;
      font-size: 1.1rem;
      position: relative;
      letter-spacing: 0.08em;
      margin: 0;
      :before {
        content: '';
        position: absolute;
        bottom: -65px;
        right: 13px;
        width: 1px;
        height: 45px;
        background-color: #222;
      }
    }
    .sns-list {
      text-align: center;
      margin-top: 75px;
      list-style: none;
      padding: 0;
    }
    .sns-contents {
      padding: 5px 0;
    }
  }
  @media screen and (max-width: 425px) {
    .top_image {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }
`;

const StyledContainer = styled('div')`
  max-width: 1840px;
  width: 100%;
  padding: 0 10%;
`;
