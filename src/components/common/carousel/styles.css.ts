import { style } from '@vanilla-extract/css';

export const styles = {
  img: style({
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    objectPosition: 'center',
    '@media': {
      'screen and (min-width: 1024px)': {
        objectPosition: 'initial',
      },
    },
  }),
};
