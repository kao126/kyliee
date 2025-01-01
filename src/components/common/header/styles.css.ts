import { style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    position: 'fixed',
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  }),
  transparentBg: style({
    backgroundColor: 'transparent',
    boxShadow: 'none',
  }),
  whiteBg: style({
    backgroundColor: '#fff',
    boxShadow: '0 0 1px 0 #333',
  }),
  logo: style({
    display: 'block',
    maxWidth: '200px',
    height: 'auto',
    padding: '16px',
    '@media': {
      'screen and (min-width: 600px)': {
        padding: '12px',
      },
    },
  }),
  iconButton: style({
    padding: '16px',
    '@media': {
      'screen and (min-width: 600px)': {
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
