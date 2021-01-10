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
      style={{
        marginTop: "8px",
        padding: "4px 16px",
        backgroundColor: "#f9f9f9",
      }}
      elevation={0}
    >
      <InputBase
        fullWidth
        placeholder="Search"
        endAdornment={
          <InputAdornment position="end">
            <IconButton disabled={true} aria-label="search">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </Paper>
  );
};
export default SearchBar;
