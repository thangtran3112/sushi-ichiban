import React from "react"
import { Grid, Typography, makeStyles } from "@material-ui/core"

const makeService = (name, description, Icon) => ({
  name,
  description,
  Icon,
})

const services = [
  makeService("Lunch", [
    "Teriyaki, baked, or grilled lunch combos.",
    "Sushi rolls, soup, rice.",
    "All You Can Eat.",
  ]),
  makeService("Dinner", [
    "Signature Japanese Hotpot.",
    "Daily Specials.",
    "All You Can Eat.",
  ]),
  makeService("Takeout", [
    "We offer take-out and delivery for Teriyaki, Baked, Grilled combos, Sushi Rolls, Premium Sashimi, Specialties.",
  ]),
  makeService("Catering", [
    "We offer catering services to corporate events and parties.",
    "Please contact us for information.",
  ]),
]

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 0),
  },
  item: {
    flexBasis: "20%",
    margin: theme.spacing(0.25),
    padding: theme.spacing(2, 1),
    background:
      theme.palette.type === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    [theme.breakpoints.down("sm")]: {
      flexBasis: "45%",
    },
    [theme.breakpoints.down("xs")]: {
      flexBasis: "100%",
    },
  },
  description: {
    padding: theme.spacing(1),
  },
}))

const Services = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container justify="space-evenly">
      {services.map(service => (
        <Grid className={classes.item} item key={service.name}>
          <Typography variant="h6" align="center" gutterBottom>
            {service.name}
          </Typography>
          <div className={classes.description}>
            {service.description.map(d => (
              <Typography
                key={d}
                variant="subtitle2"
                align="center"
                component="div"
              >
                {d}
              </Typography>
            ))}
          </div>
        </Grid>
      ))}
    </Grid>
  )
}

export default Services
