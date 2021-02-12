import React from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import { MoreVertRounded } from "@material-ui/icons";

interface BookmarkItemProps {
  bookmark: {
    id: number;
    title: string;
    url: string;
  };
  onMenuClick: (event: React.MouseEvent<HTMLElement>, id: number) => void;
  selectedItemId: null | number;
}

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      "&:hover": {
        textDecoration: "underline",
      },
    },
  })
);

const BookmarkItem: React.FC<BookmarkItemProps> = (props) => {
  const { bookmark, onMenuClick, selectedItemId } = props;
  const classes = useStyles();
  return (
    <>
      <ListItem
        ContainerComponent="div"
        selected={selectedItemId === bookmark.id ? true : false}
        button
        key={bookmark.id}
        component="a"
        href={bookmark.url}
        target="_blank"
        rel="noopener"
        classes={{ button: classes.button }}
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
    </>
  );
};
export default BookmarkItem;
