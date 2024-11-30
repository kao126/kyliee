import { style } from '@vanilla-extract/css';

export const styles = {
  isDisplay: style({
    opacity: 1,
  }),
  isNotDisplay: style({
    opacity: 0,
  }),
  logo: style({
    position: 'fixed',
    maxWidth: '200px',
    height: 'auto',
    padding: '16px 8px',
    zIndex: 1,
    '@media': {
      'screen and (min-width: 428px)': {
        padding: '16px',
      },
    },
  }),
  iconButton: style({
    position: 'fixed',
    right: 0,
    padding: '16px',
    zIndex: 1,
    '@media': {
      'screen and (min-width: 428px)': {
        padding: '12px',
      },
    },
  }),
  menuWhiteIcon: style({
    fontSize: '3rem',
    color: '#fff',
  }),
  menuBlackIcon: style({
    fontSize: '3rem',
    color: 'inherit',
  }),
};
