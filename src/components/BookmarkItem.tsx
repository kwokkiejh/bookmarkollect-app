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
  Link,
} from "@material-ui/core";

import { MoreVertRounded } from "@material-ui/icons";

interface BookmarkItemProps {
  bookmark: {
    title: string;
    url: string;
  };
}
const BookmarkItem: React.FC<BookmarkItemProps> = (props) => {
  const { bookmark } = props;

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
            src={`https://www.google.com/s2/favicons?sz=32&domain_url=${bookmark.url}`}
            alt="urlImage"
          >
            <Avatar src={"/broken-image.jpg"} alt="fallbackUrlImage" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Link
            href={bookmark.url}
            color="inherit"
            target="_blank"
            rel="noopener"
          >
            {bookmark.title}
          </Link>
        </ListItemText>
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
