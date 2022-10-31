import React from "react"
import { Grid, Typography, makeStyles } from "@material-ui/core"
import AboutUsImage from "./AboutUsImage"

const START_YEAR = 1997

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
  },
  text: {},
}))

const AboutUs = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom align="center">
        Serving Calgary for {new Date().getFullYear() - START_YEAR} years
      </Typography>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            Sushi is much more than Japanese food, it is absolutely delicious, a
            mouth-watering journey for all of the senses. It is also a way for
            generations of families and friends to gather, to celebrate, to
            enjoy, to reunite.
          </Typography>
          <Typography gutterBottom>
            Combining our love for the customers and the passion for the sushi
            we hope to continue serving you for many more years to come. Every
            day we strive to provide quality products and we source local
            products where possible. Our aim is to create quality creative sushi
            and an affordable price. Our restaurant is also specially offering
            signatured Japanese hotpot, teppan, teriyaki and more...
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <AboutUsImage />
        </Grid>
      </Grid>
    </div>
  )
}

export default AboutUs
