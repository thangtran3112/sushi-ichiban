import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function HeroGrid({
  classes: classesOverride,
  children,
  ...props
}) {
  const classes = useStyles({ classes: classesOverride });

  return (
    <Grid className={classes.root} container {...props}>
      {children}
    </Grid>
  );
}
