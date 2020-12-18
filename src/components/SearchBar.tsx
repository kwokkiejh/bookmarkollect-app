import * as React from "react";
import {
  IconButton,
  Grid,
  InputBase,
  Paper,
  InputAdornment,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
const SearchBar = () => {
  return (
    <Paper
      style={{ padding: "8px 16px", backgroundColor: "rgb(226, 230, 232)" }}
    >
      <InputBase
        fullWidth
        placeholder="Search"
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="search">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </Paper>
  );
};
export default SearchBar;
