import React from "react";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    position: "sticky",
    display: "flex",
    alignItems: "center",
  },
}));

export default function DrawerHeader({ children }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} square elevation={0}>
      {children}
    </Paper>
  );
}
