import React from "react"
import clsx from "clsx"
import { Link, navigate } from "gatsby"
import { Typography, makeStyles, ButtonBase } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    "&:hover": {
      background: theme.palette.action.hover,
    },
  },
  selected: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  fullWidth: {
    width: "100%",
  },
}))

const NavigationLink = ({ to, selected, text, fullWidth, afterClick }) => {
  const classes = useStyles()

  const handleClick = (event) => {
    event.preventDefault()

    navigate(to)

    if (afterClick) afterClick()
  }

  return (
    <ButtonBase
      classes={{
        root: clsx(classes.root, {
          [classes.selected]: selected,
          [classes.fullWidth]: fullWidth,
        }),
      }}
      component={Link}
      to={to}
      onClick={handleClick}
    >
      <Typography color="inherit" variant="body2">
        {text}
      </Typography>
    </ButtonBase>
  )
}

export default NavigationLink
