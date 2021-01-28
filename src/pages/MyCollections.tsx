import React, { useEffect } from "react";
import {
  Grid,
  Hidden,
  Typography,
  ListItem,
  List,
  useMediaQuery,
  useTheme,
  Box,
} from "@material-ui/core";
import LayoutWithAddButton from "../components/LayoutWithAddButton";
import CollectionItem from "../components/CollectionItem";
import BookmarkItem from "../components/BookmarkItem";
import { useLocation, useParams } from "react-router-dom";
import { PanoramaFishEye } from "@material-ui/icons";
import CreateNewDialog from "../components/CreateNewDialog";

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
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const [menuSelectedId, setMenuSelectedId] = React.useState<null | number>(
    null
  );
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const [selectedCollectionId, setSelectedCollectionId] = React.useState<
    null | number
  >(null);

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

  const handleMenuClick = (
    event: React.MouseEvent<HTMLElement>,
    id: number
  ) => {
    console.log(event);
    console.log(id);
    setMenuAnchorEl(event.currentTarget);
    setDrawerOpen(true);
    setMenuSelectedId(id);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setDrawerOpen(false);

    setMenuSelectedId(null);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setMenuAnchorEl(null);

    setMenuSelectedId(null);
  };

  const handleCollectionSelected = (id: number) => {
    console.log(id);
    setSelectedCollectionId(id);
  };

  const listOfCollections = [
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
              padding: "36px 20px",
            }}
          >
            {matchesBreakpointXs && Object.keys(params).length === 0 ? (
              <Grid item>
                <Typography variant="h5">My Collections</Typography>
              </Grid>
            ) : null}
            {listOfCollections.map((collection) => {
              return (
                <Grid item xs={12}>
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
            style={{ padding: "36px 20px" }}
          >
            <Grid item>
              <Typography variant="h6">Collection Name</Typography>
            </Grid>
            <Grid item container direction="column">
              <List>
                {listOfBookmarks.map((bookmark) => {
                  return (
                    <Grid item>
                      <BookmarkItem
                        bookmark={bookmark}
                        menuSelectedId={menuSelectedId}
                        menuAnchorEl={menuAnchorEl}
                        onMenuClick={handleMenuClick}
                        onMenuClose={handleMenuClose}
                        drawerOpen={drawerOpen}
                        onDrawerClose={handleDrawerClose}
                      />
                    </Grid>
                  );
                })}
              </List>
            </Grid>
          </Grid>
        )}
      </Grid>
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
