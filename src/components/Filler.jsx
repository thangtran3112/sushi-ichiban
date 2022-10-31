import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})

const Filler = () => {
  const classes = useStyles()

  return <span className={classes.root} />
}

export default Filler
