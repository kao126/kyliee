// Material-Ui
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export function SideDrawer({ open, handleDrawer }) {
  const drawerWidth = 300;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
      anchor="right"
      onClose={handleDrawer}
      open={open}
    >
      {/* <DrawerHeader> */}
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      {/* </DrawerHeader> */}
    </Drawer>
  );
}
