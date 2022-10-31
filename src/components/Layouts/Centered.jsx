import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    placeItems: "center",
  },
  fullHeight: {
    height: "100%",
  },
}))

export default function Centered({ className, fullHeight, children }) {
  const classes = useStyles()

  const centeredClassName = clsx(
    classes.root,
    {
      [classes.fullHeight]: fullHeight,
    },
    className
  )

  return <div className={centeredClassName}>{children}</div>
}
