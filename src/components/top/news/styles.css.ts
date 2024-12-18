import { style, globalStyle } from '@vanilla-extract/css';

export const styles = {
  titleWrapper: style({
    textAlign: 'center',
    borderBottom: '3px solid #ccc',
    letterSpacing: '0.1rem',
  }),
  titleJp: style({
    fontSize: '1rem',
    marginLeft: '1rem',
  }),
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
  newsMore: style({
    display: 'block',
    border: '1px solid rgba(37, 42, 44, 0.5)',
    borderRadius: '2px',
    padding: ' 15px',
    maxWidth: ' 230px',
    color: '#000',
    letterSpacing: '0.03rem',
    textDecoration: 'none',
    margin: '0 auto',
    textAlign: 'center',
    ':hover': {
      opacity: '0.7',
    },
  }),
};

globalStyle('#news', {
  margin: '50px 0',
});
