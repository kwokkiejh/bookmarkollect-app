import * as React from "react";
import { Box, Paper, Typography } from "@material-ui/core";

const PageHeader = () => {
  return (
    <Paper
      elevation={0}
      style={{
        textAlign: "center",
        backgroundColor: "#dceae3",
        padding: "56px",
      }}
    >
      <Typography variant="h4">My Bookmarks</Typography>
    </Paper>
  );
};
export default PageHeader;
