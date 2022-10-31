import React from "react"
import SEO from "./SEO"
import Footer from "./Footer"

const Page = ({ title, children }) => {
  return (
    <>
      <SEO title={title} />
      {children}
      <Footer />
    </>
  )
}

export default Page
