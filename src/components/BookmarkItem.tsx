import React, { SyntheticEvent } from "react";
import {
  ListItem,
  List,
  ListItemText,
  Menu,
  MenuItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  Drawer,
  ListItemSecondaryAction,
  Divider,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import {
  FormatListBulletedOutlined,
  MoreVertRounded,
} from "@material-ui/icons";

interface BookmarkItemProps {
  bookmark: {
    id: number;
    title: string;
    url: string;
  };
  menuAnchorEl: null | HTMLElement;
  onMenuClick: (event: React.MouseEvent<HTMLElement>, id: number) => void;
  onMenuClose: () => void;
  menuSelectedId: null | number;
  drawerOpen: boolean;
  onDrawerClose: () => void;
}
const BookmarkItem: React.FC<BookmarkItemProps> = (props) => {
  const {
    bookmark,
    menuAnchorEl,
    onMenuClick,
    onMenuClose,
    menuSelectedId,
    drawerOpen,
    onDrawerClose,
  } = props;

  const useStyles = makeStyles({
    root: {
      "&:hover": {
        textDecoration: "underline",
      },
    },
  });

  const classes = useStyles();
  const theme = useTheme();
  const matchesBreakpointXs = useMediaQuery(theme.breakpoints.only("xs"));
  return (
    <>
      <ListItem
        selected={menuSelectedId === bookmark.id ? true : false}
        button
        key={bookmark.id}
        component="a"
        href={bookmark.url}
        target="_blank"
        rel="noopener"
        className={classes.root}
      >
        <ListItemAvatar>
          <Avatar
            src={`https://www.google.com/s2/favicons?sz=32&domain_url=${bookmark.url}`}
            alt="urlImage"
          >
            <Avatar src={"/broken-image.jpg"} alt="fallbackUrlImage" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>{bookmark.title}</ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            aria-label="more"
            onClick={(event) => onMenuClick(event, bookmark.id)}
          >
            <MoreVertRounded />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />

      {!matchesBreakpointXs && (
        <Menu
          getContentAnchorEl={null}
          anchorEl={menuAnchorEl}
          keepMounted
          open={Boolean(menuAnchorEl)}
          onClose={onMenuClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={onMenuClose}>Edit</MenuItem>
          <MenuItem onClick={onMenuClose}>Delete</MenuItem>
        </Menu>
      )}
      {matchesBreakpointXs && (
        <Drawer anchor={"bottom"} open={drawerOpen} onClose={onDrawerClose}>
          <List>
            <ListItem>Edit</ListItem>
            <ListItem>Delete</ListItem>
          </List>
        </Drawer>
      )}
    </>
  );
};
export default BookmarkItem;
