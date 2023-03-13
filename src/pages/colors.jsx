import React, { useState } from 'react';
import Head from 'next/head';
import { Inter } from '@next/font/google';

// style
import styled from '@emotion/styled';
import theme from 'src/theme';

// components
import { Header } from 'src/components/common/header';
import { ColorModal } from 'src/components/common/colorModal';
import { Footer } from 'src/components/common/footer';

// material-ui
import { Box, Grid, TextField } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });

export default function Colors() {
  const [firstColor, setFirstColor] = useState('#abcd06');
  const [firstColors, setFirstColors] = useState(null);
  const [secondColor, setSecondColor] = useState('#fff');
  const [firstPicker, setFirstPicker] = useState(false);
  const [secondPicker, setSecondPicker] = useState(false);

  // const handleFirstChange = (color) => {
  //   setFirstColor(color.hex);
  // };
  // Alpha値を16進数に変換する処理
  const decimalToHex = (alpha) => (alpha === 0 ? '00' : Math.round(255 * alpha).toString(16));

  const handleFirstChange = (color) => {
    // "ff0500" + "80"の形式になるように
    const hexCode = `${color.hex}${decimalToHex(color.rgb.a || 0)}`;
    setFirstColor(hexCode);
  };


  const handleSecondChange = (color) => {
    setSecondColor(color.hex);
  };

  const handleFirstPicker = () => {
    setFirstPicker((prevPicker) => !prevPicker);
  };
  const handleSecondPicker = () => {
    setSecondPicker((prevPicker) => !prevPicker);
  };

  const hashtag = firstColor.slice(0, 1);
  const hexRed = firstColor.slice(1, 3);
  const hexGreen = firstColor.slice(3, 5);
  const hexBlue = firstColor.slice(5, 7);
  const hex = hashtag + hexRed + hexGreen + hexBlue;

  const rgbaRed = parseInt(hexRed, 16);
  const rgbaGreen = parseInt(hexGreen, 16);
  const rgbaBlue = parseInt(hexBlue, 16);



  return (
    <>
      <Head>
        <title>Colors</title>
      </Head>
      <Header />
      <StyledMain>
        <h2>Color Palette</h2>
        <Grid container className='text-container'>
          <Grid item xs={2} className='text-field'>
            <TextField id='standard-basic' label='color 1' variant='standard' value={firstColor} onClick={handleFirstPicker} />
          </Grid>
          <Grid item xs={2} className='text-field'>
            <TextField id='standard-basic' label='color 2' variant='standard' value={secondColor} onClick={handleSecondPicker} />
          </Grid>
        </Grid>
        <Grid container className='palette-container'>
          <Grid item xs={2}>
            <Grid item>
              <Box
                className='color-palette'
                style={{
                  backgroundColor: firstColor,
                }}
              />
            </Grid>
            <Grid item>
              <Box
                className='color-palette'
                style={{
                  backgroundColor: firstColor,
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid item xs={12}>
              <Box
                className='color-palette'
                style={{
                  backgroundColor: secondColor,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                className='color-palette'
                style={{
                  backgroundColor: secondColor,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* <Box className='palette-container'>
          <Grid container>
            <Grid item>{firstColor}</Grid>
            <Grid item>{secondColor}</Grid>
          </Grid>
        </Box> */}
      </StyledMain>
      <ColorModal open={firstPicker} onClose={handleFirstPicker} color={firstColor} onChange={handleFirstChange} title={'Color1'} />
      <ColorModal open={secondPicker} onClose={handleSecondPicker} color={secondColor} onChange={handleSecondChange} title={'Color2'} />
    </>
  );
}

const StyledMain = styled('main')`
  .text-container {
    padding: 10px;
  }
  .text-field {
    text-align: center;
    width: 90%;
  }
  .color-palette {
    width: 90%;
    height: 80px;
    margin: 0 auto;
  }
  .palette-container {
    background-color: #eaeaea;
    padding: 10px;
  }
`;
