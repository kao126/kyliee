import { style } from '@vanilla-extract/css';

export const styles = {
  topImage: style({
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    '@media': {
      'screen and (min-width: 600px)': {
        objectFit: 'contain',
      },
    },
  }),
  topComponents: style({
    maxWidth: '1840px',
    width: '100%',
    padding: '0 10%',
  }),
};
