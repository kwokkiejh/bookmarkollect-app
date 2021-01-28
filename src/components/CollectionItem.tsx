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
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

interface CollectionItemProps {
  params: {
    title?: string;
  };

  matchesBreakpointXs: boolean;

  selectedCollectionId: null | number;

  collection: {
    id: number;
    name: string;
  };
  onCollectionSelected: (id: number) => void;
}

const theme = createMuiTheme({
  overrides: {
    MuiListItem: {
      button: {
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
  },
});
/**https://stackoverflow.com/questions/61486061/how-to-set-selected-and-hover-color-of-listitem-in-material-ui */
const useStyles = makeStyles<Theme, CollectionItemProps>({
  small: {
    width: "28px",
    height: "28px",
  },
  root: {
    borderTopRightRadius: (props) => (!props.matchesBreakpointXs ? "28px" : ""),
    borderBottomRightRadius: (props) =>
      !props.matchesBreakpointXs ? "28px" : "",
    "&$selected:hover": {
      backgroundColor: "#dceae3",
    },
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  selected: {},
});
const CollectionItem: React.FC<CollectionItemProps> = (props) => {
  const {
    params,
    matchesBreakpointXs,
    selectedCollectionId,
    collection,
    onCollectionSelected,
  } = props;
  const classes = useStyles(props);

  return (
    <>
      <ListItem
        button
        selected={selectedCollectionId === collection.id ? true : false}
        onClick={() => onCollectionSelected(collection.id)}
        classes={{
          root: classes.root,
          button: classes.button,
          selected: classes.selected,
        }}
      >
        <ListItemAvatar>
          <Avatar className={classes.small}>
            <FolderIcon fontSize="small" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{
            noWrap: true,
          }}
        >
          Collection Name
        </ListItemText>
      </ListItem>
    </>
  );
};
export default CollectionItem;
