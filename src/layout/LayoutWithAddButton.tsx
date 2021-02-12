import * as React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Fab,
  Grid,
  useMediaQuery,
  Tab,
  Tabs,
  Box,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";

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
    fabBox: {
      position: "fixed",
      width: "100%",
      bottom: "0px",
      display: "flex",
      justifyContent: "center",
      background:
        "linear-gradient( rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 70% )",
      padding: "30px 0px 10px 0px",
    },
    fab: {
      position: "fixed",
      bottom: "36px",
      right: "36px",
      zIndex: 1,
    },
    tabRoot: {
      ...theme.mixins.toolbar,
    },
    tabIndicator: {
      backgroundColor: theme.palette.primary.contrastText,
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
  const theme = useTheme();
  const matchesBreakpointXs = useMediaQuery(theme.breakpoints.only("xs"));
  const matchesBelow500 = useMediaQuery("(max-width:499px)");
  const [tabValue, setTabValue] = React.useState<null | Number>(null);
  let history = useHistory();
  let location = useLocation();

  const handleTabChange = (
    event: React.ChangeEvent<{}>,
    newTabValue: number
  ) => {
    if (newTabValue === 0) {
      history.push("/bookmarks");
    } else {
      history.push("/collections");
    }
  };

  useEffect(() => {
    if (location.pathname.includes("bookmarks")) {
      setTabValue(0);
    }
    if (location.pathname.includes("collections")) {
      setTabValue(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AppBar
        style={{ color: "white", backgroundColor: "#20313b" }}
        position="static"
      >
        <Toolbar>
          {!matchesBreakpointXs && (
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
                <Typography variant="h6">Bookmarkollect</Typography>
              </Grid>
              <Grid item>
                <Tabs
                  value={tabValue}
                  classes={{
                    root: classes.tabRoot,
                    indicator: classes.tabIndicator,
                  }}
                  onChange={handleTabChange}
                  //aria-label="nav tabs"
                  centered={true}
                >
                  <Tab classes={{ root: classes.tabRoot }} label="Bookmarks" />
                  <Tab
                    classes={{ root: classes.tabRoot }}
                    label="Collections"
                  />
                </Tabs>
              </Grid>
              <Grid>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                  onClick={handleClickOpen}
                  className={classes.darkSurfaceHover}
                >
                  New
                </Button>
              </Grid>
            </Grid>
          )}
          {matchesBreakpointXs && (
            <Grid
              container
              alignItems="center"
              justify="space-between"
              style={{ paddingTop: "8px" }}
            >
              <Grid item>
                <Typography variant="h6">Bookmarkollect</Typography>
              </Grid>

              <Grid>
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
              </Grid>
              <Grid item xs={12}>
                <Tabs
                  value={tabValue}
                  classes={{
                    root: classes.tabRoot,
                    indicator: classes.tabIndicator,
                  }}
                  variant="fullWidth"
                  onChange={handleTabChange}
                  //aria-label="nav tabs"
                  centered={true}
                >
                  <Tab classes={{ root: classes.tabRoot }} label="Bookmarks" />
                  <Tab
                    classes={{ root: classes.tabRoot }}
                    label="Collections"
                  />
                </Tabs>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
      <main>{props.children}</main>
      {matchesBelow500 && (
        <Box className={classes.fabBox}>
          <Fab size="small" color="primary">
            <AddIcon />
          </Fab>
        </Box>
      )}
    </>
  );
};
export default LayoutWithAddButton;
