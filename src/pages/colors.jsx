import React, {useState} from 'react';
import {SketchPicker} from 'react-color';
import Head from 'next/head';
import {Inter} from '@next/font/google';

// style
import styled from '@emotion/styled';
import theme from 'src/theme';

// components
import {Header} from 'src/components/common/header';
import {Footer} from 'src/components/common/footer';

// material-ui
import {Box, Grid, Modal, TextField} from '@mui/material';
import ColorModal from 'src/components/common/colorModal';

const inter = Inter({subsets: ['latin']});

export default function Colors() {
  const [firstColor, setFirstColor] = useState('#fff');
  const [secondColor, setSecondColor] = useState('#fff');
  const [firstPicker, setFirstPicker] = useState(false);
  const [secondPicker, setSecondPicker] = useState(false);

  const handleFirstChange = (color) => {
    setFirstColor(color.hex);
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
  return (
    <>
      <Head>
        <title>Colors</title>
      </Head>
      <Header />
      <StyledMain>
        <h2>Color Palette</h2>
        <TextField id='standard-basic' label='color 1' variant='standard' value={firstColor} onClick={handleFirstPicker} />
        <TextField id='standard-basic' label='color 2' variant='standard' value={secondColor} onClick={handleSecondPicker} />
        <Grid container>
          <Grid item>
            <Box
              className='color-palette'
              style={{
                backgroundColor: firstColor,
              }}
            ></Box>
            {firstColor}
          </Grid>
          <Grid item>
            <Box
              className='color-palette'
              style={{
                backgroundColor: secondColor,
              }}
            ></Box>
            {secondColor}
          </Grid>
        </Grid>
      </StyledMain>
      <ColorModal open={firstPicker} onClose={handleFirstPicker} color={firstColor} onChange={handleFirstChange} title={'Color1'} />
      <ColorModal open={secondPicker} onClose={handleSecondPicker} color={secondColor} onChange={handleSecondChange} title={'Color2'} />
    </>
  );
}

const StyledMain = styled('main')`
  .color-palette {
    width: 80px;
    height: 80px;
  }
`;
