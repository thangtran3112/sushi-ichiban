import React from "react"
import { Grid, makeStyles } from "@material-ui/core"
import AllYouCanEatMenuItem from "./AllYouCanEatMenuItem"

const buildMenuItem = (name, priceOrPrices, description) => {
  const isArray = Array.isArray(priceOrPrices)
  const prices = isArray ? priceOrPrices : undefined
  const price = isArray ? undefined : priceOrPrices

  return {
    name,
    price,
    prices,
    description,
  }
}

const menuItems = [
  buildMenuItem(
    "All you can eat Dinner - Weekday",
    "$33.99",
    "Including lunch items, plus nigiri, sasimi, special rolls"
  ),
  buildMenuItem(
    "All you can eat Dinner - Weekend",
    "$34.99",
    "Including lunch items, plus nigiri, sasimi, special rolls"
  ),
  buildMenuItem(
    "All you can eat - Lunch - Weekday",
    "$23.99",
    "Tempura, teriyaki, rolls, etc. only available before 3 p.m"
  ),
  buildMenuItem(
    "All you can eat - Lunch - Weekend",
    "$24.99",
    "Tempura, teriyaki, rolls, etc. only available before 3 p.m"
  ),
  buildMenuItem(
    "Hotpot Add-on for All-you-can-eat sushi",
    "$8.00",
    "Add-on 8$ per person"
  ),
  buildMenuItem("Kids", [
    {
      name: "3-5 years old",
      price: "$9.99",
    },
    {
      name: "3 and under",
      price: "free",
    },
  ]),
]

const useStyles = makeStyles(theme => ({
  item: {
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "50%",
    },
    padding: theme.spacing(1),
  },
}))

const AllYouCanEatMenu = ({ items = menuItems }) => {
  const classes = useStyles()

  return (
    <Grid container justify="space-around">
      {menuItems.map(item => (
        <Grid className={classes.item} key={item.name} item>
          <AllYouCanEatMenuItem item={item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default AllYouCanEatMenu
