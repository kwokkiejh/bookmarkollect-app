import * as React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);
interface TopAppBarProps {
  handleClickOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

const TopAppBar: React.FC<TopAppBarProps> = (props) => {
  const { handleClickOpen } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        style={{ color: "black", backgroundColor: "white" }}
        position="static"
      >
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            Bookmarkollect
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#008b94",
              color: "#fff",
            }}
            startIcon={<AddIcon />}
            onClick={handleClickOpen}
          >
            New
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default TopAppBar;
