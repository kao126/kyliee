'use client';
import Link from 'next/link';

// styles
import styled from '@emotion/styled';

// Material-Ui
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export function TopNews() {
  return (
    <StyledNews id='news'>
      <h1 className='title_wrapper'>
        News<span className='title_jp'>最新情報</span>
      </h1>

      <ul className='contents_wrapper'>
        <li>
          <time dateTime='2023-3-25'>2023/03/25</time>
          <Link href={'/'} className='news_content'>
            News Contents
          </Link>
        </li>
        <li>
          <time dateTime='2023-3-25'>2023/03/25</time>
          <Link href={'/'} className='news_content'>
            News Contents
          </Link>
        </li>
        <li>
          <time dateTime='2023-3-25'>2023/03/25</time>
          <Link href={'/'} className='news_content'>
            News Contents
          </Link>
        </li>
      </ul>
      <Link href={'/news'} className='news_more'>
        <span>ニュース一覧をみる</span>
        {/* <KeyboardArrowRightIcon /> */}
      </Link>
    </StyledNews>
  );
}

const StyledNews = styled('div')`
  margin: 50px 0 80px;
  .title_wrapper {
    margin-top: 30px;
    text-align: center;
    border-bottom: 3px solid #ccc;
    justify-content: space-between;
    letter-spacing: 0.1rem;
    .title_jp {
      font-size: 1rem;
      margin-left: 1rem;
    }
  }
  .news_link {
    align-self: end;
  }
  .contents_wrapper {
    width: 90%;
    margin: 0 auto 40px;
    padding: 20px 0;
    list-style: none;
  }

  .contents_wrapper > li {
    margin-bottom: 10px;
    > time {
      display: block;
      color: #000;
      opacity: 0.5;
      font-weight: 400;
      letter-spacing: 0.03rem;
      margin-bottom: 10px;
    }
  }
  .news_content {
    color: #44576d;
    font-size: 1.125em;
  }
  .news_more {
    display: block;
    border: 1px solid rgba(37, 42, 44, 0.5);
    border-radius: 2px;
    padding: 15px;
    max-width: 230px;
    color: #000;
    letter-spacing: 0.03rem;
    text-decoration: none;
    margin: 0 auto;
    text-align: center;
    :hover {
      opacity: 0.7;
    }
  }
`;
