import React from "react"
import clsx from "clsx"
import { makeStyles, Grid } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(1),
  },
  smartGrid: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  smartGridReverse: {
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row-reverse",
    },
  },
}))

export default function Split({ left, right, reverse, padding, direction }) {
  const classes = useStyles()

  return (
    <Grid
      className={clsx(classes.smartGrid, reverse && classes.smartGridReverse)}
      container
    >
      <Grid
        className={clsx({
          [classes.padding]: padding,
        })}
        xs={12}
        sm={6}
        item
      >
        {left}
      </Grid>
      <Grid
        className={clsx({
          [classes.padding]: padding,
        })}
        xs={12}
        sm={6}
        item
      >
        {right}
      </Grid>
    </Grid>
  )
}
