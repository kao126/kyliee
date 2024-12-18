import { style, globalStyle } from '@vanilla-extract/css';

export const styles = {
  img: style({
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'cover',
    '@media': {
      'screen and (min-width: 600px)': {
        maxWidth: '50%',
      },
    },
  }),
  content: style({
    width: '100%',
    paddingRight: '0',
    '@media': {
      'screen and (min-width: 600px)': {
        width: '50%',
        paddingRight: '2rem',
        margin: 'auto',
      },
    },
  }),
  title: style({
    letterSpacing: '0.03em',
    lineHeight: '1.3',
    margin: '0',
    color: '#333333',
    '@media': {
      'screen and (min-width: 600px)': {
        letterSpacing: '0.12em',
      },
    },
  }),
  description: style({
    margin: '10px 0',
  }),
  viewMoreWrapper: style({
    textAlign: 'right',
  }),
  viewMore: style({
    display: 'inline-block',
    width: '120px',
    color: ' #333333',
    paddingBottom: '5px',
    borderBottom: '1px solid #abbcc1',
    overflow: 'hidden',
    selectors: {
      '&::before': {
        position: 'absolute',
        content: "''",
        width: '120%',
        height: '100%',
        backgroundColor: '#efefef',
        left: '0',
        transition: 'transform 0.5s',
        transformOrigin: 'right top',
        transform: 'skewX(-30deg) scale(0, 1)',
        zIndex: '-1',
      },
      '&:hover::before': {
        transformOrigin: 'left top',
        transform: 'skewX(-30deg) scale(1, 1)',
      },
    },
    '@media': {
      'screen and (min-width: 600px)': {
        position: 'absolute',
        bottom: '0',
        right: '65%',
        transform: 'translateX(50%)',
      },
      'screen and (min-width: 1024px)': {
        right: '60%',
      },
    },
  }),
};

globalStyle('#concept', {
  display: 'block',
  margin: '50px 0',
  '@media': {
    'screen and (min-width: 600px)': {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row-reverse',
    },
  },
});
