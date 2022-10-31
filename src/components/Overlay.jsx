import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(0,0,0,.8)",
    padding: theme.spacing(2),
  },
  fullWidth: {
    width: "100%",
  },
  black: {
    backgroundColor: theme.palette.common.black,
  },
}))

export default function Overlay({ className, children, fullWidth, black }) {
  const classes = useStyles()

  return (
    <div
      className={clsx(
        classes.root,
        {
          [classes.fullWidth]: fullWidth,
          [classes.black]: black,
        },
        className
      )}
    >
      {children}
    </div>
  )
}
