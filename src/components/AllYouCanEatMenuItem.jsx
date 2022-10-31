import React from "react"
import clsx from "clsx"
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  price: {
    fontWeight: "bold",
    textAlign: "end",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: theme.spacing(1, 0),
  },
  title: {
    fontWeight: "bold",
  },
  grow: {
    flexGrow: 1,
  },
}))

const AllYouCanEatMenuItem = ({ item }) => {
  const classes = useStyles()

  return (
    <Card square elevation={0}>
      <CardContent>
        <div className={classes.titleContainer}>
          <Typography
            className={clsx(classes.title, classes.grow)}
            component="span"
          >
            {item.name}
          </Typography>
          {item.price && (
            <Typography
              className={classes.title}
              component="span"
              color="primary"
            >
              {item.price}
            </Typography>
          )}
        </div>
        {item.prices &&
          item.prices.map(({ name, price }) => (
            <Grid
              key={name}
              container
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="subtitle1">{name}</Typography>
              </Grid>
              <Grid item>
                <Typography
                  className={classes.price}
                  variant="subtitle1"
                  color="primary"
                >
                  {price}
                </Typography>
              </Grid>
            </Grid>
          ))}
        {item.description && (
          <Typography variant="body2">{item.description}</Typography>
        )}
      </CardContent>
    </Card>
  )
}

export default AllYouCanEatMenuItem
