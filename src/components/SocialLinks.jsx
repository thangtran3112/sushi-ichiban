import React from "react"
import { makeStyles } from "@material-ui/core"
import FacebookIcon from "./facebook.png"

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(0, 1),
    width: 30,
    height: 30,
  },
  icon: {
    width: 30,
    height: 30,
  },
}))

const SocialLinks = () => {
  const classes = useStyles()

  return (
    <>
      {/* <a className={classes.link} href="https://www.instagram.com">
        <img
          className={classes.icon}
          src={InstagramIcon}
          alt="Find us on Instagram"
        />
      </a> */}
      <a
        className={classes.link}
        href="https://www.facebook.com/sushiichibancalgary/"
      >
        <img
          className={classes.icon}
          src={FacebookIcon}
          alt="Like us on Facebook"
        />
      </a>
    </>
  )
}

export default SocialLinks
