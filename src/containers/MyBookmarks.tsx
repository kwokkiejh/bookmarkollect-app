import * as React from "react";
import { List, Container } from "@material-ui/core";
import PageHeader from "../components/PageHeader";
import SearchBar from "../components/SearchBar";
import BookmarkItem from "../components/BookmarkItem";
import TopAppBar from "./TopAppBar";
import CreateNewBookmarkDialog from "../components/CreateNewBookmarkDialog";

const MyBookmarks = () => {
  const [open, setOpen] = React.useState(false);
  const listOfBookmarks = [
    { title: "Test 1", url: "https://material.io/components/lists#anatomy" },
    {
      title: "Test 2",
      url: "https://dribbble.com/shots/6261749-Budgeting-App",
    },
    {
      title: "Test 3",
      url:
        "https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string",
    },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TopAppBar handleClickOpen={handleClickOpen} />

      <PageHeader />
      <Container style={{ padding: "36px" }}>
        <SearchBar />
        <br />
        <List>
          {listOfBookmarks.map((bookmark) => {
            return <BookmarkItem bookmark={bookmark} />;
          })}
        </List>
      </Container>
      <CreateNewBookmarkDialog
        handleClickClose={handleClickClose}
        open={open}
      />
    </>
  );
};
export default MyBookmarks;
