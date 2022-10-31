import React from "react";
import { Drawer as MuiDrawer, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Drawer({ open, onClose, children }) {
  const classes = useStyles();

  return (
    <MuiDrawer
      classes={classes}
      open={open}
      onClose={onClose}
      variant="persistent"
      anchor="right"
    >
      {children}
    </MuiDrawer>
  );
}
