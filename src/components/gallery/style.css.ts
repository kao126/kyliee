import { style } from '@vanilla-extract/css';

const gallery = style({
  position: 'absolute',
  display: 'block',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
  ':hover': {
    opacity: 1,
    textDecoration: 'none',
    background: 'rgba(0, 0, 0, 0.5)',
    cursor: 'pointer',
  },
});

export const styles = {
  container: style({
    width: '80%',
    maxWidth: '1140px',
    margin: '0 auto',
  }),
  title: style({
    textAlign: 'center',
    paddingBottom: '1rem',
  }),
  item: style({
    position: 'relative',
    padding: '15px',
  }),
  gallery,
  itemTitle: style({
    display: 'none',
    selectors: {
      [`${gallery}:hover &`]: {
        display: 'block',
        position: 'absolute',
        bottom: '30px',
        left: '50px',
        color: '#fff',
      },
    },
  }),
  img: style({
    position: 'relative',
    display: 'block',
    width: '100%',
    border: 'thin solid lightgray',
    zIndex: -1,
  }),
};
