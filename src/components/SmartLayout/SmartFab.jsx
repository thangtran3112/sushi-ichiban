import React from "react";
import {
  Grow,
  Fab as MuiFab,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function SmartFab({ children, icon, text, variant, ...props }) {
  const classes = useStyles();
  const xs = useMediaQuery((theme) => theme.breakpoints.only("xs"));

  const smartVariant = variant || xs ? "round" : "extended";

  return (
    <Grow in>
      <MuiFab className={classes.root} {...props} variant={smartVariant}>
        {icon}
        {smartVariant === "extended" && text}
      </MuiFab>
    </Grow>
  );
}
