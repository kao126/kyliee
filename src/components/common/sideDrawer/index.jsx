// Material-Ui
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import { List } from '@mui/material';
import Link from 'next/link';

export function SideDrawer({ open, handleDrawer }) {
  return (
    <StyledDrawer anchor='right' onClose={handleDrawer} open={open}>
      {/* <DrawerHeader> */}
      <StyledList>
        <div>
          <Link href={'/'}>Top</Link>
        </div>
        <div>
          <Link href={'/about'}>About</Link>
        </div>
        <div>
          <Link href={'/concept'}>Concept</Link>
        </div>
        <div>
          <Link href={'/gallery'}>Gallery</Link>
        </div>
      </StyledList>
      {/* </DrawerHeader> */}
    </StyledDrawer>
  );
}
const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 470px;
  }
`;

const StyledList = styled(List)`
  padding-top: 130px;
  margin: 0 85px;
  text-align: center;
  > div {
    margin-bottom: 33px;
  }
`;
