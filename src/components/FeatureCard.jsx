import React from "react"
import {
  makeStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
  },
  content: {
    [theme.breakpoints.only("xs")]: {
      flexBasis: "100%",
      height: "100vw",
    },
    [theme.breakpoints.up("sm")]: {
      flexBasis: "30%",
      height: "70vh",
    },
  },
  media: {
    [theme.breakpoints.only("xs")]: {
      flexBasis: "100%",
      height: "100vw",
    },
    [theme.breakpoints.up("sm")]: {
      flexBasis: "70%",
      height: "70vh",
    },
  },
}))

export default function FeatureCard({ mediaSrc, title, children }) {
  const classes = useStyles()

  return (
    <Card className={classes.root} square elevation={0}>
      <CardMedia className={classes.media} src={mediaSrc} image={mediaSrc} />
      <div className={classes.content}>
        <CardHeader title={title} />
        {children}
      </div>
    </Card>
  )
}
