// style
import styled from '@emotion/styled';

export function TopNews() {
  return (
    <StyledNews id='news'>
      <div className='title_wrapper'>
        <div></div>
        <h1>News</h1>
        <div className='news_link'>MORE</div>
      </div>
      <ul className='contents_wrapper'>
        <li>News Contents</li>
        <li>News Contents</li>
        <li>News Contents</li>
      </ul>
    </StyledNews>
  );
}

const StyledNews = styled('div')`
  margin: 50px 0 100px;
  .title_wrapper {
    display: flex;
    margin-top: 30px;
    border-bottom: 3px solid #ccc;
    justify-content: space-between;
  }
  .news_link {
    align-self: end;
    position: relative;
    ::before {
      content: '';
      position: absolute;
      width: 35px;
      height: 1px;
      right: 55px;
      top: 12px;
      background-color: #222;
    }
    ::after {
      content: '>';
      position: absolute;
      right: 55px;
      color: #222;
    }
  }
  .contents_wrapper {
    width: 90%;
    margin: 0 auto;
    padding-top: 20px;
  }

  .contents_wrapper > li {
    margin-bottom: 10px;
  }
`;
