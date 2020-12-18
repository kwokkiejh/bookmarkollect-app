import * as React from "react";
import { List, Container } from "@material-ui/core";
import PageHeader from "../components/PageHeader";
import SearchBar from "../components/SearchBar";
import BookmarkItem from "../components/BookmarkItem";
import TopAppBar from "./TopAppBar";
import CreateNewDialog from "../components/CreateNewDialog";

const MyBookmarks = () => {
  const [open, setOpen] = React.useState(false);

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
          <BookmarkItem />
          <BookmarkItem />
        </List>
      </Container>
      <CreateNewDialog handleClickClose={handleClickClose} open={open} />
    </>
  );
};
export default MyBookmarks;
