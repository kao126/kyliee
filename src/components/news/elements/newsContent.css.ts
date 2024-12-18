import { style } from '@vanilla-extract/css';

export const styles = {
  contentsWrapper: style({
    width: '90%',
    margin: '0 auto 40px',
    padding: '20px 0',
    listStyle: 'none',
  }),
  contentsList: style({
    marginBottom: '10px',
  }),
  contentsTime: style({
    display: 'block',
    color: '#000',
    opacity: '0.5',
    fontWeight: '400',
    letterSpacing: '0.03rem',
    marginBottom: '10px',
  }),
  newsContent: style({
    color: '#44576d',
    fontSize: '1.125em',
  }),
};
