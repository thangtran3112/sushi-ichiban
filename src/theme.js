import { createMuiTheme } from "@material-ui/core/styles"
import primary from "@material-ui/core/colors/amber"

const theme = createMuiTheme({
  palette: {
    primary,
    type: "dark",
    background: {
      paper: "#000",
      default: "#000",
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', "sans-serif"],
  },
})

export default theme
