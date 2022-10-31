import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import {
  Hidden,
  Link,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core"
import Page from "../components/Page"
import Centered from "../components/Layouts/Centered"
import Overlay from "../components/Overlay"
import ContactSection from "../components/ContactSection"
import clsx from "clsx"

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    width: "100%",
    height: "80vh",
    backgroundPosition: "center",
    backgroundRepeat: "none",
    backgroundSize: "cover",
  },
  overlay: {
    maxWidth: "420px",
    minWidth: "320px",
    margin: theme.spacing(2),
  },
  right: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  backgroundImageMobile: {
    width: "100%",
    height: "30vh",
    backgroundPosition: "center",
    backgroundRepeat: "none",
    backgroundSize: "cover",
  },
  overlayMobile: {
    maxWidth: theme.breakpoints.width("sm"),
    margin: theme.spacing(2, 0),
  },
  section: {
    margin: theme.spacing(2, 0, 0),
    padding: theme.spacing(2),
  },
  contact: {
    paddingBottom: theme.spacing(6),
  },
}))

function ServiceInfo() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        <b>Important Information</b>
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        We are happy to resume our dine-in services. Reservations are recommended.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Pricing is subjected to change without notice.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        To order online please use{" "}
        <Link href="https://order.online/store/sushi-ichiban-99743">
          DoorDash
        </Link>
        .
      </Typography>
    </>
  )
}

function AYCE() {
  return (
    <>
      <Typography variant="h6">
        <b>All-you-can-eat pricing:</b>
      </Typography>
      <List dense>
        <ListItem disableGutters dense>
          <ListItemText primary="Lunch (before 3pm)" secondary="Monday - Thursday" />
          <ListItemSecondaryAction>$23.99 / person</ListItemSecondaryAction>
        </ListItem>
        <ListItem disableGutters dense>
          <ListItemText
            primary="Lunch (before 3pm)"
            secondary="Friday - Sunday, Holidays"
          />
          <ListItemSecondaryAction>$24.99 / person</ListItemSecondaryAction>
        </ListItem>
        <ListItem disableGutters dense>
          <ListItemText primary="Dinner (all-day)" secondary="Monday - Thursday" />
          <ListItemSecondaryAction>$33.99 / person</ListItemSecondaryAction>
        </ListItem>
        <ListItem disableGutters dense>
          <ListItemText
            primary="Dinner (all-day)"
            secondary="Friday - Sunday, Holidays"
          />
          <ListItemSecondaryAction>$34.99 / person</ListItemSecondaryAction>
        </ListItem>
      </List>
    </>
  )
}

export default function Info({ location }) {
  const classes = useStyles()

  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "adobe-sushi-chopstick-hero.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobile: file(relativePath: { eq: "adobe-sushi-chopstick.jpeg" }) {
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
    <Page title="Sushi Ichiban - Important Information" location={location}>
      <Hidden xsDown>
        <BackgroundImage
          Tag="section"
          className={classes.backgroundImage}
          fluid={imageData}
          backgroundColor="#040e18"
        >
          <div className={classes.right}>
            <Overlay className={classes.overlay}>
              <div className={classes.section}>
                <ServiceInfo />
              </div>
              <div className={classes.section}>
                <AYCE />
              </div>
            </Overlay>
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
          <ServiceInfo />
        </div>
        <div className={classes.section}>
          <AYCE classes={classes} />
        </div>
      </Hidden>
      <div className={clsx(classes.section, classes.contact)}>
        <Hidden xsDown>
          <Centered>
            <Contact />
          </Centered>
        </Hidden>
        <Hidden smUp>
          <Contact />
        </Hidden>
      </div>
    </Page>
  )
}

function Contact() {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        <b>Contact Info</b>
      </Typography>
      <ContactSection />
    </div>
  )
}
