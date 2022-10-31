import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    overflow: "hidden",
  },
}));

export default function HeroGridItem({
  classes: classesOverride,
  children,
  ...props
}) {
  const classes = useStyles({ classes: classesOverride });

  return (
    <Grid className={classes.root} item {...props}>
      {children}
    </Grid>
  );
}
