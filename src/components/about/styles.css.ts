import { style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    width: '100%',
    textAlign: 'center',
    '@media': {
      'screen and (min-width: 1024px)': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        padding: '0 4rem',
      },
    },
  }),
  imgWrapper: style({
    marginBottom: '1.5rem',
    '@media': {
      'screen and (min-width: 1024px)': {
        width: '45%',
        textAlign: 'center',
        marginBottom: '0',
      },
    },
  }),
  img: style({
    width: '80%',
    height: 'auto',
    borderRadius: '50%',
    '@media': {
      'screen and (min-width: 600px)': {
        width: '30%',
      },
      'screen and (min-width: 1024px)': {
        width: '100%',
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
  snsWrapper: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2%',
  }),
  github: style({
    // color: '#fff',
    fontSize: '38px',
    margin: '0 5px',
  }),
  wantedly: style({
    width: '56px',
    height: 'auto',
  }),
  linkedin: style({
    // color: '#fff',
    fontSize: '42px',
    margin: '0 5px',
  }),
};
