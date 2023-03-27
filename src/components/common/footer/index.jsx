import styled from '@emotion/styled';
import { Breadcrumbs } from '@mui/material';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export function Footer() {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  return (
    <StyledFooter>
      Footer
      <Breadcrumbs aria-label='breadcrumb' className='Breadcrumbs'>
        <StyledBreadcrumb component='a' href='#' label='Home' variant='outlined' icon={<HomeIcon fontSize='small' color='#fff' />} />
        <StyledBreadcrumb component='a' href='#' label='Catalog' variant='outlined' />
        <StyledBreadcrumb label='Accessories' variant='outlined' deleteIcon={<ExpandMoreIcon />} onDelete={handleClick} />
      </Breadcrumbs>
    </StyledFooter>
  );
}

const StyledFooter = styled('footer')`
  /* position: fixed; */
  /* bottom: 10px; */
  /* color: #646464; */
  background-color: #333333;
  color: #fff;
  .Breadcrumbs {
    color: #fff;
  }
`;

const StyledBreadcrumb = styled(Chip)`
  /* background-color: #fff; */
  /* color: #29353c; */
  color: #fff;
`;
