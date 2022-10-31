import React from "react"
import { navigate } from "gatsby"
import Tab from "@material-ui/core/Tab"

export default function NavigationTab(props) {
  const { href } = props

  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault()

        navigate(href)
      }}
      {...props}
    />
  )
}
