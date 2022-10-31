import React from "react"
import clsx from "clsx"
import { Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  text: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.25, 0),
  },
  "flex-start": {
    justifyContent: "flex-start",
  },
  center: {
    justifyContent: "center",
  },
}))

const IconText = ({
  className,
  Icon,
  text,
  variant = "body2",
  component = "div",
  align = "flex-start",
  disableTypography,
  ...typographyProps
}) => {
  const classes = useStyles()

  const contents = (
    <>
      <Icon className={classes.icon} />
      {text}
    </>
  )

  return disableTypography ? (
    contents
  ) : (
    <Typography
      className={clsx(classes.text, classes[align], className)}
      variant={variant}
      component={component}
      {...typographyProps}
    >
      {contents}
    </Typography>
  )
}

export default IconText
