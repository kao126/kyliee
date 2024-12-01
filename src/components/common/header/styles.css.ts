import { style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    position: 'fixed',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 0 1px 0 #333',
    zIndex: 10,
  }),
  logo: style({
    maxWidth: '200px',
    height: 'auto',
    padding: '16px',
    '@media': {
      'screen and (min-width: 428px)': {
        padding: '12px',
      },
    },
  }),
  iconButton: style({
    padding: '16px',
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
