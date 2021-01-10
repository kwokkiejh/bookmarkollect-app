import React from "react";
import { Grid, Hidden, Typography, Container, List } from "@material-ui/core";
import TopAppBar from "../components/TopAppBar";
import CollectionItem from "../components/CollectionItem";
import BookmarkItem from "../components/BookmarkItem";

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
    setBookmarkSelected(true);
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
  return (
    <>
      <TopAppBar
        handleClickOpen={handleClickOpen}
        handleClickClose={handleClickClose}
      />

      <Grid container>
        <Grid
          item
          xs={12}
          sm={3}
          container
          direction="column"
          style={{
            zIndex: -1,
            minHeight: "100vh",
            height: "100%",
            padding: "36px 0px",
            borderRight: "1px solid #e0e0e0",
            backgroundColor: "#fafafa",
          }}
        >
          <Grid item xs={12}>
            <CollectionItem />
          </Grid>
          <Grid item xs={12}>
            <CollectionItem />
          </Grid>
        </Grid>

        <Hidden only="xs">
          <Grid
            item
            sm={9}
            container
            direction="column"
            style={{ padding: "36px" }}
          >
            <Grid item>
              <Typography variant="h6">Collection Name</Typography>
            </Grid>
            <Grid item container direction="column">
              <List>
                {listOfBookmarks.map((bookmark) => {
                  return (
                    <Grid item xs={12}>
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
        </Hidden>
      </Grid>
    </>
  );
};
export default MyCollections;
