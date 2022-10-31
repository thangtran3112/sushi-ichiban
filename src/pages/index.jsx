import React from "react"
import clsx from "clsx"
import { graphql, navigate, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { Grid, makeStyles, Typography, Hidden, Link } from "@material-ui/core"
import SMSIcon from "@material-ui/icons/Sms"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import Page from "../components/Page"
import HeroContainer from "../components/HeroContainer"
import SushiIchibanHero from "../components/SushiIchibanHero"
import NextButton from "../components/NextButton"
import Centered from "../components/Layouts/Centered"
import IconText from "../components/IconText"
import Overlay from "../components/Overlay"
import Split from "../components/Layouts/Split"
import SushiCollage from "../components/SushiCollage"
import WeeklySchedule from "../components/WeeklySchedule"
import PhoneNumber from "../components/PhoneNumber"
import ContactSection from "../components/ContactSection"
import FadeInView from "../components/FadeInView"

const useStyles = makeStyles((theme) => ({
  transition: {
    padding: theme.spacing(6, 0),
    backgroundColor: theme.palette.common.black,
  },
  section: {
    margin: theme.spacing(3, 0),
  },
  container: {
    padding: theme.spacing(2),
  },
  marginTop: {
    marginTop: theme.spacing(2),
  },
  invert: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  smartGrid: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  menuButton: {
    marginTop: theme.spacing(2),
    minWidth: "220px",
  },
}))

const IndexPage = ({ location }) => {
  const classes = useStyles()

  const data = useStaticQuery(
    graphql`
      query {
        desktopHero: file(relativePath: { eq: "sushi-cover2.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobileHero: file(relativePath: { eq: "sushi-cover2.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 420) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktopMenuHero: file(relativePath: { eq: "Sushi_Boat_2.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobileMenuHero: file(relativePath: { eq: "Sushi_Boat_2.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 420) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktopDineInHero: file(relativePath: { eq: "sushi-cover4.jpg" }) {
          childImageSharp {
            fluid(quality: 70, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobileDineInHero: file(relativePath: { eq: "sushi-cover4.jpg" }) {
          childImageSharp {
            fluid(quality: 70, maxWidth: 320) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktopTakeoutHero: file(relativePath: { eq: "Nigiri-editted.jpg" }) {
          childImageSharp {
            fluid(quality: 70, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobileTakeoutHero: file(relativePath: { eq: "Nigiri-editted.jpg" }) {
          childImageSharp {
            fluid(quality: 70, maxWidth: 320) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const dineInSources = [
    data.mobileDineInHero.childImageSharp.fluid,
    {
      ...data.desktopDineInHero.childImageSharp.fluid,
      media: "(min-width: 768px)",
    },
  ]

  const takeoutSources = [
    data.mobileTakeoutHero.childImageSharp.fluid,
    {
      ...data.desktopTakeoutHero.childImageSharp.fluid,
      media: "(min-width: 768px)",
    },
  ]

  return (
    <Page title="Sushi Ichiban" location={location}>
      <FadeInView duration={0.7}>
        <SushiIchibanHero />
      </FadeInView>
      <Hidden xsDown>
        <BackgroundImage
          Tag="section"
          className={classes.backgroundImage}
          fluid={data.desktopHero.childImageSharp.fluid}
          backgroundColor="#040e18"
        >
          <HeroContainer fullHeight></HeroContainer>
        </BackgroundImage>
      </Hidden>
      <Hidden smUp>
        <BackgroundImage
          Tag="section"
          className={classes.backgroundImage}
          fluid={data.mobileHero.childImageSharp.fluid}
          backgroundColor="#040e18"
        >
          <HeroContainer mobile></HeroContainer>
        </BackgroundImage>
      </Hidden>
      <div className={classes.transition}>
        <FadeInView slide>
          <Typography variant="h5" align="center" gutterBottom>
            Open Lunch and Dinner
          </Typography>
          <Grid
            className={classes.container}
            container
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <ContactSection />
            </Grid>
            <Grid item>
              <WeeklySchedule className={classes.container} />
            </Grid>
          </Grid>
        </FadeInView>
      </div>
      <Overlay fullWidth black>
        <Hidden xsDown>
          <BackgroundImage
            Tag="section"
            className={classes.backgroundImage}
            fluid={data.desktopMenuHero.childImageSharp.fluid}
            backgroundColor="#040e18"
          >
            <HeroContainer fullHeight></HeroContainer>
          </BackgroundImage>
        </Hidden>
        <Hidden smUp>
          <BackgroundImage
            Tag="section"
            className={classes.backgroundImage}
            fluid={data.mobileMenuHero.childImageSharp.fluid}
            backgroundColor="#040e18"
          >
            <HeroContainer mobile></HeroContainer>
          </BackgroundImage>
        </Hidden>
        <Centered fullHeight>
          <FadeInView duration={0.7}>
            <Typography variant="h6" gutterBottom align="center">
              Sushi, Sashimi, Rolls
            </Typography>
            <Typography variant="h6" gutterBottom align="center">
              All You Can Eat
            </Typography>
            <Typography variant="h6" gutterBottom align="center">
              BBQ Grill
            </Typography>
            <Typography variant="h6" gutterBottom align="center">
              Japanese Hotpot
            </Typography>
            <Centered>
              <NextButton
                className={classes.menuButton}
                color="primary"
                variant="outlined"
                size="large"
                onClick={() => navigate("/menu")}
              >
                See Menu
              </NextButton>
              <NextButton
                className={classes.menuButton}
                color="primary"
                variant="outlined"
                size="large"
                onClick={() => navigate("/order")}
              >
                Online Pickup/Delivery
              </NextButton>
            </Centered>
          </FadeInView>
        </Centered>
      </Overlay>
      <div className={classes.section}>
        <Hidden smUp>
          <Centered fullHeight>
            <div className={classes.container}>
              <Typography variant="h4" align="center" gutterBottom>
                Dine In
              </Typography>
              <Typography variant="h6" align="center" gutterBottom>
                <strong>Reservations in advance are recommended.</strong> The
                safety of our clients and our staff is of utmost importance.
              </Typography>
            </div>
          </Centered>
          <Image fluid={dineInSources}></Image>
          <Centered fullHeight>
            <div className={classes.container}>
              <Typography variant="h4" align="center" gutterBottom>
                Takeout
              </Typography>
              <Typography variant="h6" align="center" gutterBottom>
                We offer take-out and delivery for teriyaki, bake, grill, sushi
                rolls, premium sashimi, specialties.
              </Typography>
            </div>
          </Centered>
          <Image fluid={takeoutSources}></Image>
        </Hidden>
        <Hidden xsDown>
          <Split
            padding
            left={<Image fluid={dineInSources}></Image>}
            right={
              <Centered fullHeight>
                <div className={classes.container}>
                  <Typography variant="h4" align="center" gutterBottom>
                    Dine In
                  </Typography>
                  <Typography variant="h6" align="center" gutterBottom>
                    <strong>Reservations in advance are recommended.</strong>{" "}
                    The safety of our clients and our staff is of utmost
                    importance.
                  </Typography>
                </div>
              </Centered>
            }
          />
          <Split
            padding
            reverse
            left={<Image fluid={takeoutSources}></Image>}
            right={
              <Centered fullHeight>
                <div className={classes.container}>
                  <Typography variant="h4" align="center" gutterBottom>
                    Takeout
                  </Typography>
                  <Typography variant="h6" align="center" gutterBottom>
                    We offer take-out and delivery for teriyaki, bake, grill,
                    sushi rolls, premium sashimi, specialties.
                  </Typography>
                </div>
              </Centered>
            }
          />
        </Hidden>
      </div>
      <div
        className={clsx(classes.invert, classes.container, classes.transition)}
      >
        <Centered>
          <Typography component="div" variant="h6" align="center">
            <PhoneNumber number="403-243-1000" color="inherit">
              <IconText
                disableTypography
                Icon={PhoneIcon}
                text="Call Now (403) 243-1000"
              />
            </PhoneNumber>
          </Typography>
          {/*<Typography component="div" variant="h6" align="center">
            <PhoneNumber number="587-429-4268" color="inherit">
              <IconText
                disableTypography
                Icon={SMSIcon}
                text="Text (587) 429-4268"
              />
            </PhoneNumber>
          </Typography>*/}
        </Centered>
      </div>
      <div className={clsx(classes.section, classes.container)}>
        <SushiCollage />
        <Centered className={classes.section}>
          <Typography variant="h4" align="center" gutterBottom>
            Catering
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            We offer catering services to corporation events and parties. Please
            contact us for information.
          </Typography>
          <Grid
            className={clsx(classes.container, classes.smartGrid)}
            container
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <IconText
                component="span"
                Icon={PhoneIcon}
                text={
                  <PhoneNumber number="403-243-1000">
                    (403) 243-1000
                  </PhoneNumber>
                }
              />
            </Grid>
            {/*<Grid item>
              <IconText
                component="span"
                Icon={SMSIcon}
                text={
                  <PhoneNumber number="587-429-4268">
                    (587) 429-4268
                  </PhoneNumber>
                }
              />
            </Grid>*/}
            <Grid item>
              <IconText
                Icon={EmailIcon}
                text={
                  <Link
                    color="textPrimary"
                    href="mailto:sushiichibanmacleod@gmail.com"
                  >
                    sushiichibanmacleod@gmail.com
                  </Link>
                }
              />
            </Grid>
          </Grid>
        </Centered>
      </div>
    </Page>
  )
}

export default IndexPage
