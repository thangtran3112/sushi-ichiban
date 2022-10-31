import React, { useMemo, useState } from "react"
import { ThemeProvider } from "@material-ui/core"
import { createMuiTheme } from "@material-ui/core/styles"
import amber from "@material-ui/core/colors/amber"
import CustomThemeContext from "./CustomThemeContext"

const CustomThemeProvider = ({ children }) => {
  const [primary, setPrimary] = useState(amber)
  const [darkMode, setDarkMode] = useState(true)

  const type = darkMode ? "dark" : "light"

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary,
          type,
        },
        typography: {
          fontFamily: ['"Raleway"', "sans-serif"],
        },
      }),
    [primary, type]
  )

  const value = {
    setPrimary,
    setDarkMode,
    darkMode,
  }

  return (
    <CustomThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  )
}

export default CustomThemeProvider
