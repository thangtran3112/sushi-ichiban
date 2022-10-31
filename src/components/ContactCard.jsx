import React from "react"
import { Card, CardContent, makeStyles } from "@material-ui/core"
import LocationIcon from "@material-ui/icons/LocationOn"
import PhoneIcon from "@material-ui/icons/Phone"
import HoursIcon from "@material-ui/icons/AccessTime"
import IconText from "./IconText"

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
    },
  },
  header: {
    paddingBottom: 0,
  },
}))

const ContactCard = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <IconText
          Icon={LocationIcon}
          text="4014 Macleod Trail South, Calgary"
        />
        <IconText Icon={HoursIcon} text="11AM - 9:30PM" />
        <IconText Icon={PhoneIcon} text="(587) 429-4268" />
        <IconText Icon={PhoneIcon} text="(403) 243-1000" />
      </CardContent>
    </Card>
  )
}

export default ContactCard
