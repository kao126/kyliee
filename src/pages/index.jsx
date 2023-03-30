// Next.js
import Head from 'next/head';

// React
import { useEffect, useState } from 'react';

// components
import { Header } from 'src/components/common/header';
import { Main } from 'src/components/top/main';
import { SimpleFooter } from 'src/components/common/footer/simpleFooter.jsx';

// hooks
import { useHeaderScroll } from 'src/hooks/useHeaderScroll';

// styles
// import styles from 'src/styles/Home.module.css';
import styled from '@emotion/styled';

export default function Home() {
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
      <Head>
        <title>Top</title>
      </Head>
      {isLoading ? (
        <StyledLoading>
          <div className='loading_border'></div>
        </StyledLoading>
      ) : (
        <StyledDiv>
          <Header isActive={isHeaderActive} />
          <Main />
          <SimpleFooter />
        </StyledDiv>
      )}
    </>
  );
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
