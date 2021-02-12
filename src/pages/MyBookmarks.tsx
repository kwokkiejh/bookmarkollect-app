import * as React from "react";
import { List, Container, Typography } from "@material-ui/core";
import SearchBar from "../components/SearchBar";
import BookmarkItem from "../components/BookmarkItem";
import LayoutWithAddButton from "../layout/LayoutWithAddButton";
import CreateNewDialog from "../components/CreateNewDialog";
import { useEffect } from "react";
import * as BookmarkApi from "../apis/BookmarkApi";
import ItemMoreOptions from "../components/ItemMoreOptions";
import useItemMoreOptions from "../hooks/useItemMoreOptions";

const MyBookmarks = () => {
  const [reloadData, setReloadData] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [bookmarkSelected, setBookmarkSelected] = React.useState(true);

  useEffect(() => {
    if (reloadData) {
      console.log("call this first");
      BookmarkApi.getAllBookmarks()
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      console.log("testt");
      setReloadData(!reloadData);
    }
  }, [reloadData]);

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
    {
      id: 5,
      title: "Test 5",
      url:
        "https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string",
    },
  ];

  const handleClickOpen = () => {
    setBookmarkSelected(true);
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleBookmarkCollectionClick = (valueClicked: boolean) => {
    if (bookmarkSelected !== valueClicked) {
      setBookmarkSelected(!bookmarkSelected);
    }
  };

  const {
    handleItemMoreOptionsOpen,
    handleItemMoreOptionsClose,
    itemMenuAnchorEl,
    selectedItemId,
    itemDrawerOpen,
  } = useItemMoreOptions();

  return (
    <>
      <LayoutWithAddButton
        handleClickOpen={handleClickOpen}
        handleClickClose={handleClickClose}
      >
        <Container style={{ padding: "20px" }}>
          <Typography variant="h5">My Bookmarks</Typography>
          <SearchBar />
          <List style={{ paddingBottom: "70px" }}>
            {listOfBookmarks.map((bookmark) => {
              return (
                <BookmarkItem
                  bookmark={bookmark}
                  selectedItemId={selectedItemId}
                  onMenuClick={handleItemMoreOptionsOpen}
                />
              );
            })}
          </List>
        </Container>
        <ItemMoreOptions
          onItemMoreOptionsClose={handleItemMoreOptionsClose}
          itemMenuAnchorEl={itemMenuAnchorEl}
          itemDrawerOpen={itemDrawerOpen}
        />
        <CreateNewDialog
          handleClickClose={handleClickClose}
          open={open}
          handleBookmarkCollectionClick={handleBookmarkCollectionClick}
          bookmarkSelected={bookmarkSelected}
        />
      </LayoutWithAddButton>
    </>
  );
};
export default MyBookmarks;
