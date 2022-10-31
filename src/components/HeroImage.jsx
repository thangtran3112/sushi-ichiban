import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    objectFit: "cover",
    zIndex: -1,
    width: "100%",
  },
}));

export default function HeroImage({ src }) {
  const classes = useStyles();

  return <img className={classes.root} src={src} />;
}
