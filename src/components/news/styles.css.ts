import { style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    height: '100dvh',
    margin: '6rem auto',
    maxWidth: '1200px',
  }),
  titleWrapper: style({
    textAlign: 'center',
    borderBottom: '1px solid #ccc',
    justifyContent: 'space-between',
    letterSpacing: '0.1rem',
  }),
  titleJp: style({
    fontSize: '1rem',
    marginLeft: '1rem',
  }),
};
