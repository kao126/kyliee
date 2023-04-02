import Link from 'next/link';

// styles
import styled from '@emotion/styled';

// Material-Ui
import { Drawer, Button, List, ListItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export function SideDrawer({ open, handleDrawer }) {
  return (
    <StyledDrawer anchor='right' onClose={handleDrawer} open={open}>
      <StyledButton onClick={handleDrawer}>
        <CloseIcon className='close_icon' />
      </StyledButton>
      <StyledList>
        <ListItem disablePadding>
          <Link href={'/'}>
            Top<span>トップ</span>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href={'/about'}>
            About<span>アバウト</span>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href={'/concept'}>
            Concept<span>コンセプト</span>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href={'/gallery'}>
            Gallery<span>ギャラリー</span>
          </Link>
        </ListItem>
      </StyledList>
    </StyledDrawer>
  );
}
const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    max-width: 400px;
    width: 66%;
    justify-content: center;
    padding: 0 60px;
  }
  @media screen and (max-width: 425px) {
    .MuiDrawer-paper {
      width: 75%;
      padding: 0 20px;
    }
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px;
  z-index: 1;
  :hover {
    opacity: 0.6;
  }
  .close_icon {
    font-size: 3rem;
    color: #333333;
  }
`;

const StyledList = styled(List)`
  padding: 40px 20px;
  text-align: center;
  > li {
    margin-bottom: 25px;
    > a {
      color: #333333;
      font-size: 24px;
      letter-spacing: 0.03em;
      text-decoration: none;
      :hover {
        opacity: 0.6;
      }
      > span {
        font-size: 16px;
        margin-left: 13px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    padding: 30px 20px;
  }
`;
