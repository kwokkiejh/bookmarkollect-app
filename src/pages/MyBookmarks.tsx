import * as React from "react";
import { List, Container, Typography } from "@material-ui/core";
import SearchBar from "../components/SearchBar";
import BookmarkItem from "../components/BookmarkItem";
import TopAppBar from "../components/TopAppBar";
import CreateNewDialog from "../components/CreateNewDialog";
import { useEffect } from "react";
import * as BookmarkApi from "../apis/BookmarkApi";

const MyBookmarks = () => {
  const [open, setOpen] = React.useState(false);
  const [bookmarkSelected, setBookmarkSelected] = React.useState(true);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const [menuSelectedId, setMenuSelectedId] = React.useState<null | number>(
    null
  );
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  useEffect(() => {
    console.log("call this first");
    BookmarkApi.getAllBookmarks()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log("testt");
  }, []);

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

  const handleBookmarkCollectionClick = (valueClicked: boolean) => {
    if (bookmarkSelected !== valueClicked) {
      setBookmarkSelected(!bookmarkSelected);
    }
  };
  return (
    <>
      <TopAppBar
        handleClickOpen={handleClickOpen}
        handleClickClose={handleClickClose}
      />

      <Container style={{ padding: "36px" }}>
        <Typography variant="h5">My Bookmarks</Typography>
        <SearchBar />
        <List>
          {listOfBookmarks.map((bookmark) => {
            return (
              <BookmarkItem
                bookmark={bookmark}
                menuSelectedId={menuSelectedId}
                menuAnchorEl={menuAnchorEl}
                onMenuClick={handleMenuClick}
                onMenuClose={handleMenuClose}
                drawerOpen={drawerOpen}
                onDrawerClose={handleDrawerClose}
              />
            );
          })}
        </List>
      </Container>
      <CreateNewDialog
        handleClickClose={handleClickClose}
        open={open}
        handleBookmarkCollectionClick={handleBookmarkCollectionClick}
        bookmarkSelected={bookmarkSelected}
      />
    </>
  );
};
export default MyBookmarks;
