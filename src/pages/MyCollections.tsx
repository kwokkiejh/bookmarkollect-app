import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  List,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@material-ui/core";
import LayoutWithAddButton from "../layout/LayoutWithAddButton";
import CollectionItem from "../components/CollectionItem";
import BookmarkItem from "../components/BookmarkItem";
import { useParams } from "react-router-dom";
import { MoreVert } from "@material-ui/icons";
import CreateNewDialog from "../components/CreateNewDialog";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ItemMoreOptions from "../components/ItemMoreOptions";
import useItemMoreOptions from "../hooks/useItemMoreOptions";
const listOfBookmarks = [
  {
    id: 1,
    title: "Test 1",
    url: "https://material.io/components/lists#anatomy",
  },
  {
    id: 2,
    title: "Test 2",
    url: "https://dribbble.com/shots/6261749-Budgeting-App",
  },
  {
    id: 3,
    title: "Test 3",
    url:
      "https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string",
  },
  {
    id: 4,
    title: "Test 4",
    url:
      "https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string",
  },
];

const MyCollections = () => {
  const [open, setOpen] = React.useState(false);
  const [bookmarkSelected, setBookmarkSelected] = React.useState(true);

  const [selectedCollectionId, setSelectedCollectionId] = React.useState<
    null | number
  >(null);

  const {
    handleItemMoreOptionsOpen,
    handleItemMoreOptionsClose,
    itemMenuAnchorEl,
    selectedItemId,
    itemDrawerOpen,
  } = useItemMoreOptions();
  const params = useParams();
  const theme = useTheme();
  const matchesBreakpointXs = useMediaQuery(theme.breakpoints.only("xs"));

  useEffect(() => {
    if (matchesBreakpointXs && Object.keys(params).length === 0) {
      console.log("remove selected");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchesBreakpointXs]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
    setBookmarkSelected(true);
  };

  const handleBookmarkCollectionClick = (valueClicked: boolean) => {
    if (bookmarkSelected !== valueClicked) {
      setBookmarkSelected(!bookmarkSelected);
    }
  };

  const handleCollectionSelected = (id: number) => {
    console.log(id);
    setSelectedCollectionId(id);
  };

  interface Collection {
    id: number;
    name: string;
  }

  const listOfCollections: Collection[] = [
    {
      id: 1,
      name: "Collection 1",
    },
    {
      id: 2,
      name: "Collection 2",
    },
    {
      id: 3,
      name: "Collection 3",
    },
    {
      id: 4,
      name: "Collection 4",
    },
  ];

  return (
    <LayoutWithAddButton
      handleClickOpen={handleClickOpen}
      handleClickClose={handleClickClose}
    >
      <Grid container direction="row" alignItems="flex-start">
        {/** Hide Collections List if at breakpoint xs AND params are passed in (aka user has specifically selected a collection) */}
        {matchesBreakpointXs && Object.keys(params).length !== 0 ? null : (
          <Grid
            item
            xs={12}
            sm={3}
            container
            direction="column"
            style={{
              padding: "20px",
            }}
          >
            {matchesBreakpointXs && Object.keys(params).length === 0 ? (
              <Grid item>
                <Typography variant="h5">My Collections</Typography>
              </Grid>
            ) : null}
            <Grid item container direction="column">
              <List style={{ paddingBottom: "70px", width: "100%" }}>
                {listOfCollections.map((collection) => {
                  return (
                    <Grid item>
                      <CollectionItem
                        collection={collection}
                        selectedCollectionId={selectedCollectionId}
                        params={params}
                        matchesBreakpointXs={matchesBreakpointXs}
                        onCollectionSelected={handleCollectionSelected}
                      />
                    </Grid>
                  );
                })}
              </List>
            </Grid>
          </Grid>
        )}
        {/** Hide Bookmark List if at breakpoint xs AND params are not passed in (aka default collection selected/user has not specifically selected a collection) */}
        {matchesBreakpointXs && Object.keys(params).length === 0 ? null : (
          <Grid
            item
            xs={12}
            sm={9}
            container
            direction="column"
            style={{ padding: "20px" }}
          >
            <Grid item container direction="row" alignItems="center">
              {matchesBreakpointXs && (
                <Grid item style={{ marginRight: "4px" }}>
                  <IconButton size="small">
                    <ArrowBackIcon />
                  </IconButton>
                </Grid>
              )}
              <Grid item style={{ flexGrow: 1 }}>
                <Typography variant="h6">Collection Name</Typography>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  {" "}
                  <MoreVert />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item container direction="column">
              <List style={{ paddingBottom: "70px", width: "100%" }}>
                {listOfBookmarks.map((bookmark) => {
                  return (
                    <Grid item>
                      {" "}
                      <BookmarkItem
                        bookmark={bookmark}
                        selectedItemId={selectedItemId}
                        onMenuClick={handleItemMoreOptionsOpen}
                      />
                    </Grid>
                  );
                })}
              </List>
            </Grid>
          </Grid>
        )}
      </Grid>
      <ItemMoreOptions
        onItemMoreOptionsClose={handleItemMoreOptionsClose}
        itemMenuAnchorEl={itemMenuAnchorEl}
        itemDrawerOpen={itemDrawerOpen}
      />{" "}
      <CreateNewDialog
        handleClickClose={handleClickClose}
        open={open}
        handleBookmarkCollectionClick={handleBookmarkCollectionClick}
        bookmarkSelected={bookmarkSelected}
      />
    </LayoutWithAddButton>
  );
};
export default MyCollections;
