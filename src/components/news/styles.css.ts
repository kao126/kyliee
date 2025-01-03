import { style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    margin: '0 auto',
    maxWidth: '1200px',
  }),
  titleWrapper: style({
    textAlign: 'center',
    borderBottom: '1px solid #ccc',
    letterSpacing: '0.1rem',
  }),
  titleJp: style({
    fontSize: '1rem',
    marginLeft: '1rem',
  }),
};
