import { style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '120px',
    backgroundColor: '#333333',
  }),
  footerText: style({
    color: '#fff',
    margin: '0 5px',
  }),
};
