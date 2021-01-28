import * as React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Fab,
  MenuItem,
  useMediaQuery,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    darkSurfaceHover: {
      transition: "none",
      "&:hover": {
        boxShadow: "inset 100px 100px rgba(255, 255, 255, 0.4)",
      },
    },
    title: {
      flexGrow: 1,
    },
    fab: {
      position: "fixed",
      bottom: "20px",
      right: "36px",
    },
  })
);
interface LayoutWithAddButtonProps {
  handleClickOpen: () => void;
  handleClickClose: () => void;
}

const LayoutWithAddButton: React.FC<LayoutWithAddButtonProps> = (props) => {
  const { handleClickOpen, handleClickClose } = props;
  const classes = useStyles();
  const matchesBelow500 = useMediaQuery("(max-width:499px)");

  return (
    <>
      <AppBar
        style={{ color: "white", backgroundColor: "#20313b" }}
        position="static"
      >
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            Bookmarkollect
          </Typography>
          {!matchesBelow500 && (
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={handleClickOpen}
              className={classes.darkSurfaceHover}
            >
              New
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <main>{props.children}</main>
      {matchesBelow500 && (
        <Fab size="small" className={classes.fab}>
          <AddIcon />
        </Fab>
      )}
    </>
  );
};
export default LayoutWithAddButton;
