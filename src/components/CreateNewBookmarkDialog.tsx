import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  FormLabel,
  FormControl,
  FormHelperText,
  Popper,
  PopperProps,
  Chip,
  Typography,
  InputLabel,
} from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";

interface CreateNewDialogProps {
  handleClickClose: (event: React.MouseEvent<HTMLElement>) => void;
  open: boolean;
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
];
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const selected = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
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

const CreateNewBookmarkDialog: React.FC<CreateNewDialogProps> = (props) => {
  const { handleClickClose, open } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="form-dialog-title"
        maxWidth={"xs"}
      >
        <FormControl>
          <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
            New Bookmark
          </DialogTitle>
          <DialogContent>
            <FormLabel component="label">Title</FormLabel>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              variant="outlined"
              fullWidth
            />
            <FormLabel component="label">URL</FormLabel>
            <TextField
              autoFocus
              margin="dense"
              id="url"
              variant="outlined"
              fullWidth
            />
            <FormLabel component="label">Tags (optional)</FormLabel>
            <Autocomplete
              multiple
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
                <TextField {...params} id="here" variant="outlined" />
              )}
            />
            <FormHelperText>
              Maximum of three tags; press enter after typing to create a new
              tag
            </FormHelperText>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClickClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClickClose} color="primary">
              Add
            </Button>
          </DialogActions>
        </FormControl>
      </Dialog>
    </div>
  );
};

export default CreateNewBookmarkDialog;
