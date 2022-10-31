import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core"
import { forwardRef } from "react"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },
  noViewHeight: {
    height: "100%",
  },
  normalHeight: {
    height: "80vh",
  },
  fullHeight: {
    height: "100vh",
  },
  mobile: {
    height: "60vh",
  },
  small: {
    height: "30vh",
  },
  spacing: {
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(2, 0),
    },
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(4, 0),
    },
  },
}))

export default forwardRef(
  (
    { className, children, fullHeight, spacing, noViewHeight, mobile, small },
    ref
  ) => {
    const classes = useStyles()

    return (
      <div
        ref={ref}
        className={clsx(
          classes.root,
          {
            [classes.fullHeight]: fullHeight,
            [classes.normalHeight]: noViewHeight ? undefined : !fullHeight,
            [classes.spacing]: spacing,
            [classes.noViewHeight]: noViewHeight,
            [classes.mobile]: mobile,
            [classes.small]: small,
          },
          className
        )}
      >
        {children}
      </div>
    )
  }
)
