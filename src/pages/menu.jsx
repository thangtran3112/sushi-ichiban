import React from "react"
import Page from "../components/Page"
import MenuList from "../components/MenuList"

export default function Menu({ location }) {
  return (
    <Page title="Sushi Ichiban - Menu" location={location}>
      <MenuList />
    </Page>
  )
}
