import React from "react"
import { Paper, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
}))

const Content = ({ children }) => {
  const classes = useStyles()

  return (
    <Paper classes={classes} elevation={0} square>
      {children}
    </Paper>
  )
}

export default Content
