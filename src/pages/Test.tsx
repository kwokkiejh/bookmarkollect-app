import React from "react";
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { ListItem } from "@material-ui/core";

const StyledToggleButtonGroup = withStyles((theme) => ({
  root: { border: `1px solid ${theme.palette.divider}` },
  grouped: {
    margin: theme.spacing(0.5),
    border: "none",
    "&:not(:first-child)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-child": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))(ToggleButtonGroup);

export default function Test() {
  const [alignment, setAlignment] = React.useState("left");

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
      >
        <ToggleButton value="left" aria-label="left aligned">
          Bookmark
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          Collection
        </ToggleButton>
        <ListItem button>test</ListItem>
      </StyledToggleButtonGroup>
    </div>
  );
}
