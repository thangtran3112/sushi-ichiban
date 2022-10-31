import React from "react"
import { makeStyles, Link } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
})

export default function PhoneNumber({ color, number, children }) {
  const href = `tel:${number}`
  const classes = useStyles()

  return (
    <Link className={classes.root} href={href} color={color}>
      {children}
    </Link>
  )
}
