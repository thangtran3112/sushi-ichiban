import React, { useState, useEffect } from "react"
import {
  makeStyles,
  CssBaseline,
  ThemeProvider,
  Collapse,
} from "@material-ui/core"
import Alert from "@material-ui/lab/Alert"
import defaultTheme from "./theme"
import Navigation from "./components/Navigation"
import Link from "./components/Link"
import LocationContext from "./LocationContext"
import NavigationContext from "./NavigationContext"
import { useLocalStorageValue } from "./hooks/useLocalStorageState"

const FEATURE_FLAGS = {
  SHOW_BANNER: false,
}

const useStyles = makeStyles((theme) => ({
  alert: {
    alignItems: "center",
    backgroundColor: "inherit",
  },
  viewLink: { marginRight: theme.spacing(0.5) },
}))

const App = ({ location, children }) => {
  const path = location?.pathname || "/"
  const classes = useStyles()
  const { value: showBanner, setValue } = useLocalStorageValue(
    "SHOW_BANNER",
    FEATURE_FLAGS.SHOW_BANNER ? "true" : "false"
  )
  const [top, setTop] = useState(40)
  const open = showBanner === "true"
  useEffect(() => {
    if (open) setTop(48 * 2)
    else setTop(48)
  }, [open])

  useEffect(() => {
    if (path === "/info" && showBanner === "true") {
      setValue(false)
    }
  }, [path, setValue, showBanner])

  return (
    <NavigationContext.Provider value={top}>
      <LocationContext.Provider value={location}>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Navigation
            path={path}
            banner={
              FEATURE_FLAGS.SHOW_BANNER && (
                <Collapse in={open}>
                  <Alert
                    className={classes.alert}
                    onClose={() => setValue("false")}
                    severity="info"
                    variant="filled"
                    square
                  >
                    <Link className={classes.viewLink} to="/info">
                      View
                    </Link>
                    Important Info about Service Changes
                  </Alert>
                </Collapse>
              )
            }
          />
          {children}
        </ThemeProvider>
      </LocationContext.Provider>
    </NavigationContext.Provider>
  )
}

export default App
