import React from "react";
import clsx from "clsx";
import { Link, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
    color: theme.palette.text.primary,
    display: "flex",
    padding: theme.spacing(1, 2),
    alignItems: "center",
    width: "100%",
  },
  selected: {
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
    marginRight: theme.spacing(2),
    display: "flex",
    alignItems: "center",
  },
}));

export default function SmartMenuLink({ to, exact, icon, children }) {
  const classes = useStyles();
  const match = useRouteMatch(to);

  const selected = exact ? Boolean(match && match.isExact) : Boolean(match);

  return (
    <Link className={clsx(classes.root, selected && classes.selected)} to={to}>
      {icon && <span className={classes.icon}>{icon}</span>}
      {children}
    </Link>
  );
}
