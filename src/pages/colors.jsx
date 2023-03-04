import Head from 'next/head';
import Image from 'next/image';
import {Inter} from '@next/font/google';

// style
// import "../styles/globals.css";
import styles from 'src/styles/Home.module.css';

// components
import {Header} from 'src/components/common/header';
import {Footer} from 'src/components/common/footer';
import styled from '@emotion/styled';

// material-ui
import { Box, TextField } from '@mui/material';

const inter = Inter({subsets: ['latin']});

export default function Colors() {
  return (
    <>
      <Head>
        <title>Colors</title>
      </Head>
      <Header />
      <StyledMain>
        <h2>Color Palette</h2>

        <TextField id='standard-basic' label='color 1' variant='standard' />
        <TextField id='standard-basic' label='color 2' variant='standard' />

        <Box className="color-palette"></Box>
      </StyledMain>
    </>
  );
}

const StyledMain = styled('main')`
.color-palette {
  width: 80px;
  height: 80px;
  background-color: blue;
}
`;
