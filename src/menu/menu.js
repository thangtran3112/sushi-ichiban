import React from "react"
import { makeStyles } from "@material-ui/core"
import appetizers from "./Appetizers.json"
import sushiSashimiSpecials from "./SushiSashimiSpecials.json"
import lunchSpecials from "./LunchSpecials.json"
import sushiRolls from "./SushiRolls.json"
import dinnerSpecials from "./DinnerSpecials.json"
import maki from "./Maki.json"
import grillNoodles from "./GrillsAndNoodles.json"

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
}))

function Price({ children }) {
  const classes = useStyles()

  return <span className={classes.root}>{children}</span>
}

const makeMenuItem = (name, items, extraInfo) => ({ name, items, extraInfo })
const makeExtraInfo = (id, text) => ({ id, text: text || id })

export const menu = [
  makeMenuItem("Appetizers", appetizers),
  makeMenuItem("Grills & Noodles", grillNoodles),
  makeMenuItem("Sushi & Sashimi Sets", sushiSashimiSpecials),
  makeMenuItem("Sushi Rolls", sushiRolls),
  makeMenuItem("Lunch Set", lunchSpecials, [
    makeExtraInfo("Available until 3:00 PM daily"),
    makeExtraInfo("Each set comes with Soup, Rice and Salad"),
    makeExtraInfo(
      "lunchSpecial1",
      <>
        Lunch Special with 1 Item - <Price>from $9.99+</Price>
      </>
    ),
    makeExtraInfo(
      "lunchspecial2",
      <>
        Lunch Special with 2 Items - <Price>from $13.99+</Price>
      </>
    ),
    makeExtraInfo("Items with (*) - $1 extra"),
  ]),
  makeMenuItem("Dinner Set", dinnerSpecials, [
    makeExtraInfo("Available all day, any time."),
    makeExtraInfo("All Bento sets come with Soup, Rice and Salad.")
  ]),
  makeMenuItem("Maki Rolls", maki)
]
