import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export default function LogoIcon({ marginRight = 8, verticalAlign, small }) {
  const data = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "ichiban_logo.png" }) {
          childImageSharp {
            fixed(quality: 90, width: 48, height: 48) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        logoSmall: file(relativePath: { eq: "ichiban_logo.png" }) {
          childImageSharp {
            fixed(quality: 90, width: 30, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return small ? (
    <Image
      style={{ marginRight, verticalAlign, width: 30, height: 30 }}
      fixed={data.logoSmall.childImageSharp.fixed}
      alt="Sushi Ichiban"
    />
  ) : (
    <Image
      style={{ marginRight, verticalAlign }}
      fixed={data.logo.childImageSharp.fixed}
      alt="Sushi Ichiban"
    />
  )
}
