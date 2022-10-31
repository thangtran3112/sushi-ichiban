import React, { useCallback } from "react"
import clsx from "clsx"
import { Button, makeStyles } from "@material-ui/core"
import { navigate } from "gatsby"
import Icon from "./LogoIcon"

const useStyles = makeStyles({
  root: {
    fontSize: "1.25rem",
    textTransform: "none",
  },
})

const Logo = ({ className }) => {
  const classes = useStyles()

  const onClick = useCallback(() => {
    navigate("/")
  }, [])

  return (
    <Button
      className={clsx(classes.root, className)}
      size="small"
      onClick={onClick}
      startIcon={<Icon small />}
    >
      Sushi Ichiban
    </Button>
  )
}

export default Logo
