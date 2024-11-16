import { style } from '@vanilla-extract/css';

export const styles = {
  snsArea: style({
    position: 'fixed',
    bottom: '120px',
    right: '35px',
    zIndex: 1,
  }),
  snsTitle: style({
    writingMode: 'vertical-rl',
    fontSize: '1.1rem',
    position: 'relative',
    letterSpacing: '0.08em',
    margin: 0,
    ':before': {
      content: '',
      position: 'absolute',
      bottom: '-65px',
      right: '13px',
      width: '1px',
      height: '45px',
      backgroundColor: '#222',
    },
  }),
  snsList: style({
    textAlign: 'center',
    marginTop: '75px',
    listStyle: 'none',
    padding: '0',
  }),
  snsContents: style({
    padding: '5px 0',
  }),
};
