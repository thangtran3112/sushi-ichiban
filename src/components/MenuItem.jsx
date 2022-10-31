import React from "react"
import clsx from "clsx"
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  number: {
    fontWeight: "normal",
    paddingRight: theme.spacing(1),
  },
  price: {
    fontWeight: "bold",
    textAlign: "end",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1, 0),
  },
  title: {
    fontWeight: "bold",
  },
  grow: {
    flexGrow: 1,
  },
}))

const MenuItem = ({ item }) => {
  const classes = useStyles()

  return (
    <Card square elevation={0}>
      <CardContent>
        <div className={classes.titleContainer}>
          <Typography
            className={clsx(classes.title, classes.grow)}
            component="div"
          >
            {item.number && (
              <span className={classes.number}>{item.number}</span>
            )}
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
        {item.description && (
          <Typography variant="body2">{item.description}</Typography>
        )}
      </CardContent>
    </Card>
  )
}

export default MenuItem
