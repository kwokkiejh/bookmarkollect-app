import React, { SyntheticEvent } from "react";
import {
  ListItem,
  Grid,
  ListItemText,
  ListItemIcon,
  IconButton,
  ListItemAvatar,
  Avatar,
  Divider,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { MoreVertRounded } from "@material-ui/icons";
const BookmarkItem = () => {
  const handleImgError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = "/favicon.ico";
  };

  const handleLaunchBookmark = (event: any) => {
    console.log("bookmark");
  };

  const handleMore = (event: any) => {
    console.log("more");
  };
  return (
    <>
      <ListItem button onClick={handleLaunchBookmark}>
        <ListItemAvatar>
          <Avatar
            src="https://material.io/favicon.ico"
            onError={handleImgError}
            alt="urlImage"
          />
        </ListItemAvatar>
        <ListItemText>Blbalbalbala</ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label="more" onClick={handleMore}>
            <MoreVertRounded />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider component="li" variant="middle" />
    </>
  );
};
export default BookmarkItem;
