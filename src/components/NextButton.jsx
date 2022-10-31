import React from "react"
import clsx from "clsx"
import { makeStyles, Button } from "@material-ui/core"
import NextIcon from "./NextIcon"

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "none",
    borderRadius: theme.spacing(3),
  },
}))

export default function NextButton({
  children,
  classes: classesOverride,
  className,
  ...props
}) {
  const classes = useStyles({ classes: classesOverride })

  return (
    <Button
      className={clsx(classes.root, className)}
      endIcon={<NextIcon />}
      {...props}
    >
      {children}
    </Button>
  )
}
