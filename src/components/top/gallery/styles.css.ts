import { style, globalStyle } from '@vanilla-extract/css';

export const styles = {
  titleWrapper: style({
    color: '#333333',
    letterSpacing: ' 0.03em',
    textAlign: 'center',
    lineHeight: 1.3,
    margin: 0,
    '@media': {
      'screen and (min-width: 1024px)': {
        letterSpacing: '0.12em',
      },
    },
  }),
  description: style({
    textAlign: 'center',
  }),
  viewMore: style({
    position: 'absolute',
    width: '120px',
    color: '#333333',
    textDecoration: 'none',
    textAlign: 'center',
    right: 0,
    left: 0,
    margin: 'auto',
    fontSize: '1rem',
    paddingBottom: '5px',
    borderBottom: '1px solid #abbcc1',
    transition: '0.5s',
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
  }),
};

globalStyle('#gallery', {
  position: 'relative',
  marginBottom: '100px',
});
