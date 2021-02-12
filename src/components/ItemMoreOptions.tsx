import {
  Drawer,
  List,
  ListItem,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";

interface ItemMoreOptionsProps {
  onItemMoreOptionsClose: () => void;
  itemMenuAnchorEl: null | HTMLElement;
  itemDrawerOpen: boolean;
}

const ItemMoreOptions: React.FC<ItemMoreOptionsProps> = (props) => {
  const matchesBelow500 = useMediaQuery("(max-width:499px)");
  const { onItemMoreOptionsClose, itemMenuAnchorEl, itemDrawerOpen } = props;

  return (
    <>
      {!matchesBelow500 ? (
        <Menu
          getContentAnchorEl={null}
          anchorEl={itemMenuAnchorEl}
          keepMounted
          open={Boolean(itemMenuAnchorEl)}
          onClose={onItemMoreOptionsClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Edit</MenuItem>
          <MenuItem>Delete</MenuItem>
        </Menu>
      ) : (
        <Drawer
          anchor={"bottom"}
          open={itemDrawerOpen}
          onClose={onItemMoreOptionsClose}
        >
          <List>
            <ListItem>Edit</ListItem>
            <ListItem>Delete</ListItem>
          </List>
        </Drawer>
      )}
    </>
  );
};
export default ItemMoreOptions;
