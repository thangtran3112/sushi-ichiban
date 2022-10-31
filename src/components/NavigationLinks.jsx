import React, { useState } from "react"
import {
  IconButton,
  makeStyles,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Hidden,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import MenuIcon from "@material-ui/icons/Menu"
import NavigationLink from "./NavigationLink"
import WeeklySchedule from "./WeeklySchedule"
import Centered from "./Layouts/Centered"

const buildLink = (path) => (to, text, exact = false) => ({
  to,
  text,
  selected: exact ? path === to : path.includes(to),
})

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0, 2),
  },
  toolbar: {
    justifyContent: "flex-end",
  },
  schedule: { padding: theme.spacing(2) },
}))

const useDrawerStyles = makeStyles((theme) => ({
  paper: {
    width: "100vw",
    backgroundColor: "rgba(0,0,0,0.9)",
  },
}))

const NavigationLinks = ({ path }) => {
  const classes = useStyles()
  const [menuOpen, setMenuOpen] = useState(false)
  const handleOpen = (event) => {
    setMenuOpen(true)
  }
  const handleClose = () => setMenuOpen(false)

  const buildNavLink = buildLink(path)

  const links = [
    buildNavLink("/", "Home", true),
    buildNavLink("/info", "All-You-Can-Eat"),
    buildNavLink("/menu", "Menu"),
    buildNavLink("/order", "Online Order"),
  ]

  const drawerClasses = useDrawerStyles()

  return (
    <>
      <Hidden implementation="css" smUp>
        <>
          <IconButton onClick={handleOpen}>
            <MenuIcon />
          </IconButton>
          <Drawer
            classes={drawerClasses}
            variant="persistent"
            elevation={0}
            open={menuOpen}
            onClose={handleClose}
            anchor="right"
          >
            <Toolbar className={classes.toolbar}>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Toolbar>
            <List>
              {links.map((link) => (
                <ListItem key={link.to}>
                  <NavigationLink
                    fullWidth
                    {...link}
                    afterClick={handleClose}
                  />
                </ListItem>
              ))}
            </List>
            <Centered>
              <WeeklySchedule className={classes.schedule} />
            </Centered>
          </Drawer>
        </>
      </Hidden>
      <Hidden implementation="css" xsDown>
        <>
          {links.map((link) => (
            <span className={classes.container} key={link.to}>
              <NavigationLink {...link} />
            </span>
          ))}
        </>
      </Hidden>
    </>
  )
}

export default NavigationLinks
