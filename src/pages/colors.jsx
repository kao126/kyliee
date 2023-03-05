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
        <Modal open={firstPicker} onClose={handleFirstPicker}>
          <div>
            <h4>Color1</h4>
            <SketchPicker color={firstColor} onChange={handleFirstChange} />
          </div>
        </Modal>
        <Modal open={secondPicker} onClose={handleSecondPicker}>
          <div>
            <h4>Color2</h4>
            <SketchPicker color={secondColor} onChange={handleSecondChange} />{' '}
          </div>
        </Modal>
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
    </>
  );
}

const StyledMain = styled('main')`
  .color-palette {
    width: 80px;
    height: 80px;
  }
`;
