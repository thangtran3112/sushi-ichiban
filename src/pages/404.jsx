import React from "react"
import { Typography } from "@material-ui/core"
import Page from "../components/Page"
import Content from "../components/Content"

const NotFoundPage = () => (
  <Page title="Not Found">
    <Content>
      <Typography>The page you were looking for was not found.</Typography>
    </Content>
  </Page>
)

export default NotFoundPage
