import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import {
  DialogTitle,
  Popper,
  PopperProps,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { Autocomplete } from "@material-ui/lab";

interface CreateNewDialogProps {
  handleClickClose: () => void;
  handleBookmarkCollectionClick: (valueClicked: boolean) => void;
  bookmarkSelected: boolean;
  open: boolean;
}

const top100Films = [
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
];

const DialogPopper = function (props: PopperProps) {
  return <Popper {...props} placement="bottom"></Popper>;
};

const DialogListBox = function (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLUListElement> &
    React.HTMLAttributes<HTMLUListElement>
) {
  return <ul {...props} style={{ maxHeight: "100px" }}></ul>;
};

const useStyles = makeStyles({
  root: {
    "&.Mui-selected": {
      backgroundColor: "#008b94 !important",
      color: "#fff",
      fontWeight: "bold",
    },
  },
  paper: {
    minWidth: "400px",
    minHeight: "350px",
  },
});

const StyledToggleButtonGroup = withStyles(() => ({
  root: { background: "#dceae3", borderRadius: 25 },
  grouped: {
    //margin: theme.spacing(0.5),
    border: "none",
    "&:not(:first-child)": {
      borderRadius: 25,
    },
    "&:first-child": {
      borderRadius: 25,
    },
  },
}))(ToggleButtonGroup);

// revision: arrow function to pass parameter in event handler
const BookmarkCollectionToggle = (props: CreateNewDialogProps) => {
  const [alignment, setAlignment] = React.useState("left");
  const classes = useStyles();
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <div>
      <StyledToggleButtonGroup
        size="small"
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        style={{ width: "100%" }}
      >
        <ToggleButton
          value="left"
          aria-label="left aligned"
          style={{ width: "50%" }}
          className={classes.root}
          selected={props.bookmarkSelected}
          onClick={() => props.handleBookmarkCollectionClick(true)}
        >
          Bookmark
        </ToggleButton>
        <ToggleButton
          value="center"
          aria-label="centered"
          style={{ width: "50%" }}
          className={classes.root}
          selected={!props.bookmarkSelected}
          onClick={() => props.handleBookmarkCollectionClick(false)}
        >
          Collection
        </ToggleButton>
      </StyledToggleButtonGroup>
    </div>
  );
};

const CreateNewDialog: React.FC<CreateNewDialogProps> = (props) => {
  const { handleClickClose, open, bookmarkSelected } = props;
  const theme = useTheme();
  const matchesBreakpointXs = useMediaQuery(theme.breakpoints.only("xs"));

  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="form-dialog-title"
        classes={{ paper: classes.paper }}
        fullScreen={matchesBreakpointXs}
      >
        <DialogContent>
          <Typography
            variant="subtitle2"
            style={{
              textAlign: "center",
              color: "#008b94",
              fontWeight: "bold",
            }}
          >
            Add a new...
          </Typography>

          <BookmarkCollectionToggle {...props} />
          {bookmarkSelected && (
            <>
              <TextField
                margin="dense"
                id="title"
                label="Title"
                fullWidth
                inputProps={{
                  maxLength: 100,
                }}
              />

              <TextField
                multiline
                margin="dense"
                id="url"
                label="URL"
                fullWidth
              />
              <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                PopperComponent={DialogPopper}
                ListboxComponent={DialogListBox}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Collection (optional)"
                    margin="dense"
                  />
                )}
              />
            </>
          )}

          {/*<Autocomplete
              multiple
              onChange={(event, value) => {
                console.log(value);
              }}
              size="small"
              id="tags-filled"
              options={top100Films.map((option) => option.title)}
              freeSolo={selected.length > 4 ? false : true}
              ListboxComponent={DialogListBox}
              PopperComponent={DialogPopper}
              getOptionDisabled={(options) =>
                selected.length > 4 ? true : false
              }
              renderTags={(value: string[], getTagProps) =>
                value.map((option: string, index: number) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField {...params} id="tags" label="Tags (optional)" />
              )}
            />
            <FormHelperText>
              Maximum of three tags; press enter after typing to create a new
              tag
              </FormHelperText>*/}

          {!bookmarkSelected && (
            <TextField
              margin="dense"
              id="name"
              label="Name"
              fullWidth
              inputProps={{
                maxLength: 100,
              }}
            />
          )}
        </DialogContent>

        <DialogActions
          style={{ padding: "24px", justifyContent: "space-between" }}
        >
          <Button onClick={handleClickClose}>Cancel</Button>
          <Button
            onClick={handleClickClose}
            color="primary"
            variant="contained"
            style={{ width: "50%" }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateNewDialog;
