import { style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    display: 'flex',
    flexDirection: 'column-reverse',
    backgroundColor: '#333',
    '@media': {
      'screen and (min-width: 1024px)': {
        flexDirection: 'row',
      },
    },
  }),
  img: style({
    width: '100%',
    height: '100dvh',
    objectFit: 'cover',
    objectPosition: 'bottom',
    '@media': {
      'screen and (min-width: 1024px)': {
        width: '50%',
      },
    },
  }),
  contentWrapper: style({
    width: '100%',
    alignSelf: 'center',
    '@media': {
      'screen and (min-width: 1024px)': {
        width: '50%',
      },
    },
  }),
  content: style({
    color: '#fff',
    width: '77%',
    margin: '0 auto 80px',
    textAlign: 'center',
    '@media': {
      'screen and (min-width: 1024px)': {
        margin: '0 auto 40px',
      },
    },
  }),
  title: style({
    paddingBottom: '70px',
    marginTop: '160px',
    marginBottom: '50px',
    '@media': {
      'screen and (min-width: 1024px)': {
        marginBottom: '80px',
      },
      'screen and (min-width: 600px)': {
        marginTop: '180px',
      },
    },
  }),
  description: style({
    margin: '0',
    fontSize: '12px',
    '@media': {
      'screen and (min-width: 1024px)': {},
    },
  }),
};
