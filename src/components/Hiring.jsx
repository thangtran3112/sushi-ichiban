import React from "react"
import { Grid, Typography, makeStyles } from "@material-ui/core"
import HeroContent from "./HeroContent"
import HeroMedia from "./HeroMedia"
import HeroContainer from "./HeroContainer"
import hiringMedia from "../images/hiring.jpeg"
import NextButton from "./NextButton"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  bottomRight: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}))

export default function Hiring({ title, description }) {
  const classes = useStyles()

  return (
    <HeroContainer>
      <HeroMedia src={hiringMedia} stretch />
      <HeroContent top left padding overlay>
        <div>
          <Typography variant="h3" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {description}
          </Typography>
          <div className={classes.bottomRight}>
            <NextButton variant="contained" color="secondary">
              Apply Now
            </NextButton>
          </div>
        </div>
      </HeroContent>
    </HeroContainer>
  )
}
