import React from "react"
import { Paper, Grid, Typography, makeStyles } from "@material-ui/core"
import SocialLinks from "./SocialLinks"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(3),
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
  },
  container: {
    width: "100%",
    padding: theme.spacing(2, 0),
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.root} elevation={0} square>
      <Grid
        className={classes.container}
        container
        alignItems="center"
        justify="center"
      >
        <SocialLinks />
      </Grid>
      <Typography
        className={classes.container}
        component="div"
        variant="caption"
        align="center"
      >
        © {new Date().getFullYear()} <b>Sushi Ichiban</b>. All Rights Reserved.
      </Typography>
      {/* <Typography
        className={classes.container}
        component="div"
        variant="caption"
        align="center"
      >
        Powered by @vchin
      </Typography> */}
    </Paper>
  )
}

export default Footer
