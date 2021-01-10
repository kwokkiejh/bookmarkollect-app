import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import FolderIcon from "@material-ui/icons/Folder";
const useStyles = makeStyles(() => ({
  small: {
    width: "28px",
    height: "28px",
  },
}));
const CollectionItem = () => {
  const classes = useStyles();
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.small}>
            <FolderIcon fontSize="small" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>Collection Name</ListItemText>
      </ListItem>
    </>
  );
};
export default CollectionItem;
