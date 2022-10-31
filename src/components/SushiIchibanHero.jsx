import React from "react"
import clsx from "clsx"
import { navigate } from "gatsby"
import { makeStyles, Typography, Grid, Button, Hidden } from "@material-ui/core"
import Logo from "./LogoIcon"
import NextButton from "./NextButton"
import useBooleanState from "../hooks/useBooleanState"
import ReservationsDialog from "./ReservationsDialog"
import Centered from "./Layouts/Centered"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    placeItems: "center",
    backgroundColor: theme.palette.common.black,
    padding: theme.spacing(2),
  },
  content: {},
  title: {
    padding: theme.spacing(2),
    display: "inline-flex",
    alignItems: "flex-end",
  },
  subtitle: {
    fontWeight: "bold",
    "&>span": {
      marginRight: theme.spacing(1),
    },
  },
  contact: {
    margin: theme.spacing(1, 0),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  spacing: {
    margin: theme.spacing(1, 0),
  },
  smartGrid: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  reservationsButton: {
    borderRadius: 0,
  },
}))

const SushiIchibanHero = () => {
  const classes = useStyles()

  const [open, { setTrue, setFalse }] = useBooleanState()

  const title = (
    <>
      <Logo marginRight={16} width={48} height={48} verticalAlign="top" />
      Sushi Ichiban
    </>
  )

  return (
    <>
      <div className={classes.root}>
        <div className={classes.content}>
          <Centered>
            <Hidden xsDown>
              <Typography className={classes.title} variant="h3">
                {title}
              </Typography>
            </Hidden>
            <Hidden smUp>
              <Typography className={classes.title} variant="h5">
                {title}
              </Typography>
            </Hidden>
          </Centered>
          <Grid
            className={clsx(classes.spacing, classes.smartGrid)}
            container
            alignItems="center"
            justify="center"
            spacing={2}
          >
            <Grid item>
              <Button
                className={classes.reservationsButton}
                variant="contained"
                color="primary"
                onClick={setTrue}
              >
                Reservations
              </Button>
            </Grid>
            <Grid item>
              <NextButton
                variant="outlined"
                color="primary"
                onClick={() => navigate("/menu")}
              >
                See Menu
              </NextButton>
            </Grid>
            <Grid item>
              <NextButton
                variant="outlined"
                color="primary"
                onClick={() => navigate("/order")}
              >
                Online Order
              </NextButton>
            </Grid>
          </Grid>
          <Typography
            className={classes.spacing}
            component="div"
            variant="subtitle2"
            align="center"
          >
            Due to Covid-19, reservations for Dine-in services are recommended.
          </Typography>
        </div>
      </div>
      <ReservationsDialog open={open} onClose={setFalse} />
    </>
  )
}

export default SushiIchibanHero
