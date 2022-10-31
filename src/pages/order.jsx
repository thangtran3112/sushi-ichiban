import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Fab, Hidden, Link, makeStyles, Typography } from "@material-ui/core"
import Page from "../components/Page"
import clsx from "clsx"
import Centered from "../components/Layouts/Centered"

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "none",
    backgroundSize: "cover",
  },
  overlay: {
    height: "100vh",
    padding: theme.spacing(2),
  },
  caption: {
    maxWidth: "320px",
    minWidth: "320px",
  },
  fab: {
    backgroundColor: "#000",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#000",
    },
  },
  backgroundImageMobile: {
    width: "100%",
    height: "30vh",
    backgroundPosition: "center",
    backgroundRepeat: "none",
    backgroundSize: "cover",
  },
  section: {
    margin: theme.spacing(2, 0, 0),
    padding: theme.spacing(2),
    maxWidth: theme.breakpoints.width("sm"),
  },
  darkText: {
    color: "#000",
  },
  orderButtonMobile: {
    margin: theme.spacing(3, 0),
    width: "100%",
  },
  header: {
    maxWidth: "70%",
  },
  center: {
    maxWidth: "400px",
  },
}))

export default function Info({ location }) {
  const classes = useStyles()

  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "adobe-center-hero.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobile: file(relativePath: { eq: "adobe-salmon-sushi.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 420) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid
  const mobileImageData = data.mobile.childImageSharp.fluid

  return (
    <Page title="Sushi Ichiban - Order Online" location={location}>
      <Hidden xsDown>
        <BackgroundImage
          Tag="section"
          className={classes.backgroundImage}
          fluid={imageData}
          backgroundColor="#040e18"
        >
          <div className={classes.overlay}>
            <Centered fullHeight>
              <div className={classes.center}>
                <Typography
                  className={clsx(classes.header)}
                  variant="h3"
                  component="h1"
                  gutterBottom
                >
                  Pick-up or Delivery
                </Typography>
                <Typography
                  className={clsx(classes.caption)}
                  variant="subtitle1"
                  gutterBottom
                >
                  We partner with DoorDash to offer online order or delivery.
                  Prices on DoorDash are subjected to DoorDash policies and may
                  be different from this website menu.
                </Typography>
                <div className={classes.section}>
                  <Fab
                    variant="extended"
                    color="primary"
                    className={classes.darktText}
                    component={Link}
                    target="_blank"
                    href="https://order.online/store/sushi-ichiban-99743"
                  >
                    Order Online Here
                  </Fab>
                </div>
              </div>
            </Centered>
          </div>
        </BackgroundImage>
      </Hidden>
      <Hidden smUp>
        <BackgroundImage
          Tag="section"
          className={classes.backgroundImageMobile}
          fluid={mobileImageData}
          backgroundColor="#040e18"
        ></BackgroundImage>
        <div className={classes.section}>
          <Typography variant="h3" gutterBottom>
            Order Online with DoorDash
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            We partner with DoorDash to offer online order or delivery. Prices
            on DoorDash are subjected to DoorDash policies and may be different
            from this website menu.
          </Typography>
          <Fab
            variant="extended"
            color="primary"
            className={classes.orderButtonMobile}
          >
            <Link
              color="inherit"
              href="https://order.online/store/sushi-ichiban-99743"
            >
              Order Online Here
            </Link>
          </Fab>
        </div>
      </Hidden>
    </Page>
  )
}
