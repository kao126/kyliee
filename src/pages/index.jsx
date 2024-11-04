// Next.js 
import { useEffect, useState } from 'react';
import Parser from 'rss-parser';
// components
import { Header } from 'src/components/common/header';
import { Main } from 'src/components/top/main';
import { Footer } from 'src/components/common/footer';
// hooks
import { useHeaderScroll } from 'src/hooks/useHeaderScroll';
// styles
import styled from '@emotion/styled';

export const metadata = {
  title: 'Top',
}

export default function Home({ response }) {
  const { isHeaderActive } = useHeaderScroll();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2 * 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <StyledLoading>
          <div className='loading_border'></div>
        </StyledLoading>
      ) : (
        <StyledDiv>
          <Header isActive={isHeaderActive} />
          <Main response={response} />
          <Footer />
        </StyledDiv>
      )}
    </>
  );
}

export async function getStaticProps() {
  const parser = new Parser();
  const response = await parser.parseURL('https://zenn.dev/kao126/feed?all=1');
  return {
    props: {
      response,
    },
  };
}

const StyledLoading = styled('div')`
  height: 100vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  .loading_border {
    width: 100%;
    animation: fadeIn 2s ease-in-out, widthIn 2s ease-in-out;
    background-color: #aaa;
    height: 2px;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes widthIn {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;

const StyledDiv = styled('div')`
  animation: fadeIn 1.5s ease;
`;
