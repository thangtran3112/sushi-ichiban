import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
import { MAX_DRAWER_WIDTH } from "../../constants";
import { useSmartLayoutContext } from "./SmartLayoutContext";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: MAX_DRAWER_WIDTH,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 56,
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  expanded: {
    [theme.breakpoints.up("md")]: {
      marginLeft: MAX_DRAWER_WIDTH,
    },
  },
}));

export default function SmartContent({ children }) {
  const classes = useStyles();
  const { menuExpanded } = useSmartLayoutContext();

  return (
    <div
      className={clsx(classes.root, {
        [classes.expanded]: menuExpanded,
      })}
    >
      {children}
    </div>
  );
}
