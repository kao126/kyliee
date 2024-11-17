import { style, globalStyle } from '@vanilla-extract/css';

export const styles = {
  titleWrapper: style({
    fontSize: '7vw',
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
  gridContainer: style({
    maxWidth: '1200px',
    width: '100%',
    margin: '2rem auto',
  }),
  gridItem: style({
    display: 'flex',
    alignItems: 'stretch',
  }),
  card: style({
    padding: '16px',
  }),
  img: style({
    width: '100%',
    border: 'thin solid lightgray',
    marginBottom: '10px',
    '@media': {
      'screen and (min-width: 1024px)': {
        marginBottom: '25px',
      },
    },
  }),
  content: style({
    display: 'flex',
    justifyContent: 'space-between',
  }),
  imgTitle: style({
    color: '#333',
    fontSize: '1.2rem',
    fontWeight: 700,
    lineHeight: 1.7,
    marginBottom: 'auto',
  }),
  link: style({
    position: 'relative',
    textDecoration: 'none',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  }),
  contentBtn: style({
    width: '50px',
    height: '50px',
    backgroundColor: '#333',
    borderRadius: '50%',
    position: 'relative',
    '::before': {
      position: 'absolute',
      content: "''",
      backgroundColor: '#fff',
      width: '16px',
      height: '1px',
      top: '50%',
      right: '43%',
      zIndex: 1,
    },
    '::after': {
      position: 'absolute',
      content: "'▷'",
      fontSize: '20px',
      color: '#fff',
      top: '23%',
      right: '20%',
      zIndex: 1,
    },
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

globalStyle('#blog', {
  position: 'relative',
  marginBottom: '100px',
});
