import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
  },
  centered: {
    left: 0,
    width: "100%",
    top: "50%",
    transform: "translateY(-50%)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  padding: {
    padding: theme.spacing(2),
  },
  top: {
    top: theme.spacing(2),
  },
  bottom: {
    bottom: theme.spacing(2),
  },
  left: {
    [theme.breakpoints.up("sm")]: {
      left: theme.spacing(3),
    },
    [theme.breakpoints.down("xs")]: {
      left: 0,
    },
  },
  right: {
    [theme.breakpoints.up("sm")]: {
      right: theme.spacing(3),
    },
    [theme.breakpoints.down("xs")]: {
      right: 0,
    },
  },
  fullWidth: {
    width: "100%",
  },
  fullHeight: {
    height: "100%",
  },
  relative: {
    position: "relative",
  },
}))

export default function HeroContent({
  className,
  children,
  overlay,
  padding,
  centered,
  bottom,
  left,
  top,
  right,
  fullWidth,
  fullHeight,
  relative,
}) {
  const classes = useStyles()

  return (
    <div
      className={clsx(
        classes.root,
        {
          [classes.overlay]: overlay,
          [classes.padding]: padding,
          [classes.centered]: centered,
          [classes.bottom]: bottom,
          [classes.left]: left,
          [classes.top]: top,
          [classes.right]: right,
          [classes.fullWidth]: fullWidth,
          [classes.fullHeight]: fullHeight,
          [classes.relative]: relative,
        },
        classes.content,
        className
      )}
    >
      {children}
    </div>
  )
}
