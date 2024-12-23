import { style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    width: '100%',
    paddingTop: '80px',
    textAlign: 'center',
    '@media': {
      'screen and (min-width: 768px)': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        padding: '150px 40px 40px',
      },
    },
  }),
  imgWrapper: style({
    width: '45%',
    textAlign: 'center',
  }),
  img: style({
    width: '100%',
    '@media': {
      'screen and (min-width: 768px)': {
        width: '80%',
      },
      'screen and (min-width: 1024px)': {
        width: '100%',
        borderRadius: '50%',
      },
    },
  }),
  contents: style({
    width: '80%',
    margin: '0 auto',
    '@media': {
      'screen and (min-width: 768px)': {
        width: '70%',
      },
      'screen and (min-width: 1024px)': {
        padding: '0 4rem',
      },
    },
  }),
  enName: style({
    display: 'block',
    fontSize: '24px',
    opacity: '0.6',
    '@media': {
      'screen and (min-width: 1024px)': {
        display: 'inline-block',
      },
    },
  }),
  bold: style({
    fontWeight: 'bold',
  }),
  skillWrapper: style({
    display: 'flex',
    justifyContent: 'start',
    gap: '10%',
  }),
  skill: style({
    listStyle: 'none',
    margin: '0',
    paddingLeft: '1.5rem',
  }),
};
