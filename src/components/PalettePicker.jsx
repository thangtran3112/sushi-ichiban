import React from "react"
import { Typography, Grid, Checkbox, makeStyles } from "@material-ui/core"
import {
  pink,
  blue,
  yellow,
  green,
  purple,
  amber,
  lime,
  blueGrey,
  lightGreen,
  brown,
  deepOrange,
  deepPurple,
  cyan,
  grey,
  lightBlue,
  indigo,
  orange,
  red,
  teal,
} from "@material-ui/core/colors"
import { useCustomTheme } from "./CustomThemeContext"

const colors = [
  pink,
  blue,
  yellow,
  green,
  purple,
  amber,
  lime,
  blueGrey,
  lightGreen,
  brown,
  deepOrange,
  deepPurple,
  cyan,
  grey,
  lightBlue,
  indigo,
  orange,
  red,
  teal,
]

const useStyles = makeStyles({
  square: {
    width: 24,
    height: 24,
  },
})

const PalettePicker = () => {
  const classes = useStyles()
  const { darkMode, setDarkMode, setPrimary } = useCustomTheme()

  const handleChange = () => setDarkMode(!darkMode)
  const onClick = c => setPrimary(c)

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Typography variant="caption">Dark Mode</Typography>
        </Grid>
        <Grid item>
          <Checkbox checked={darkMode} onChange={handleChange} />
        </Grid>
      </Grid>
      <Grid container justify="center">
        {colors.map(color => (
          <Grid item key={color["500"]}>
            <div
              className={classes.square}
              key={color["500"]}
              style={{
                backgroundColor: color["500"],
              }}
              role="button"
              onClick={() => onClick(color)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default PalettePicker
