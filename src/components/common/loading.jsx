'use client';
// React.js
import { useEffect, useState } from 'react';
// styles
import styled from '@emotion/styled';

export function Loading({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2 * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <StyledLoading>
          <div className='loading_border'></div>
        </StyledLoading>
      ) : (
        <StyledDiv>{children}</StyledDiv>
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
