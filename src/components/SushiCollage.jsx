import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { makeStyles, Grid, Hidden } from "@material-ui/core"
import HeroContainer from "./HeroContainer"

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "none",
    backgroundSize: "cover",
  },
}))

export default function SushiCollage() {
  const classes = useStyles()

  const data = useStaticQuery(
    graphql`
      query {
        desktop1: file(relativePath: { eq: "sushi1.jpg" }) {
          childImageSharp {
            fluid(quality: 70, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobile1: file(relativePath: { eq: "sushi1.jpg" }) {
          childImageSharp {
            fluid(quality: 70, maxWidth: 320) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktop2: file(relativePath: { eq: "sushi2.jpg" }) {
          childImageSharp {
            fluid(quality: 70, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobile2: file(relativePath: { eq: "sushi2.jpg" }) {
          childImageSharp {
            fluid(quality: 70, maxWidth: 320) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktop3: file(relativePath: { eq: "sushi3.jpg" }) {
          childImageSharp {
            fluid(quality: 70, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobile3: file(relativePath: { eq: "sushi3.jpg" }) {
          childImageSharp {
            fluid(quality: 70, maxWidth: 320) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Grid container alignItems="center" justify="center" spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Hidden xsDown>
          <BackgroundImage
            Tag="section"
            className={classes.backgroundImage}
            fluid={data.desktop1.childImageSharp.fluid}
            backgroundColor="#040e18"
          >
            <HeroContainer small></HeroContainer>
          </BackgroundImage>
        </Hidden>
        <Hidden smUp>
          <BackgroundImage
            Tag="section"
            className={classes.backgroundImage}
            fluid={data.mobile1.childImageSharp.fluid}
            backgroundColor="#040e18"
          >
            <HeroContainer small></HeroContainer>
          </BackgroundImage>
        </Hidden>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Hidden xsDown>
          <BackgroundImage
            Tag="section"
            className={classes.backgroundImage}
            fluid={data.desktop2.childImageSharp.fluid}
            backgroundColor="#040e18"
          >
            <HeroContainer small></HeroContainer>
          </BackgroundImage>
        </Hidden>
        <Hidden smUp>
          <BackgroundImage
            Tag="section"
            className={classes.backgroundImage}
            fluid={data.mobile2.childImageSharp.fluid}
            backgroundColor="#040e18"
          >
            <HeroContainer small></HeroContainer>
          </BackgroundImage>
        </Hidden>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Hidden xsDown>
          <BackgroundImage
            Tag="section"
            className={classes.backgroundImage}
            fluid={data.desktop3.childImageSharp.fluid}
            backgroundColor="#040e18"
          >
            <HeroContainer small></HeroContainer>
          </BackgroundImage>
        </Hidden>
        <Hidden smUp>
          <BackgroundImage
            Tag="section"
            className={classes.backgroundImage}
            fluid={data.mobile3.childImageSharp.fluid}
            backgroundColor="#040e18"
          >
            <HeroContainer small></HeroContainer>
          </BackgroundImage>
        </Hidden>
      </Grid>
    </Grid>
  )
}
