import { style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    margin: '4rem 0',
  }),
  title: style({
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
    padding: '40px 0',
  }),
  gridContainer: style({
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
  }),
  gridItem: style({
    position: 'relative',
    margin: '40px 0',
    padding: '0 2.5rem',
  }),
  img: style({
    width: '100%',
    aspectRatio: '40/21',
    border: 'thin solid lightgray',
    marginBottom: '25px',
    objectFit: 'contain',
  }),
  articleTitle: style({
    color: '#333',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.7rem',
  }),
  link: style({
    position: 'absolute',
    right: '2.5rem',
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#333',
    textDecoration: 'none',
    borderBottom: '1px solid #333',
    letterSpacing: '0.1em',
    lineHeight: '1.6',
  }),
};
