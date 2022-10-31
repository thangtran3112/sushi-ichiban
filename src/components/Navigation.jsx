import React from "react"
import clsx from "clsx"
import { AppBar, Toolbar, makeStyles } from "@material-ui/core"
import Logo from "./Logo"
import NavigationLinks from "./NavigationLinks"
import Filler from "./Filler"
import { forwardRef } from "react"

const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {
    minHeight: theme.spacing(6),
  },
  grow: {
    flexGrow: 1,
  },
}))

const Navigation = forwardRef(({ classes, className, path, banner }, ref) => {
  const navigationClasses = useStyles({ classes })

  return (
    <AppBar
      className={clsx(navigationClasses.root, className)}
      position="sticky"
      color="default"
      elevation={0}
    >
      {banner}
      <Toolbar className={navigationClasses.toolbar}>
        <Logo className={navigationClasses.logo} />
        <Filler />
        <NavigationLinks path={path} />
      </Toolbar>
    </AppBar>
  )
})

export default Navigation
