import React from "react"
import PhoneNumber from "./PhoneNumber"
import IconText from "./IconText"
import { Link } from "@material-ui/core"
import LocationIcon from "@material-ui/icons/LocationOn"
import PhoneIcon from "@material-ui/icons/Phone"
import SMSIcon from "@material-ui/icons/Sms"
import EmailIcon from "@material-ui/icons/Email"

export default function ContactSection() {
  return (
    <div>
      <IconText
        Icon={LocationIcon}
        text={
          <Link
            color="textPrimary"
            href="https://g.page/sushiichibanmacleod?share"
          >
            4014 Macleod Trail South, Calgary
          </Link>
        }
      />
      <IconText
        Icon={PhoneIcon}
        text={
          <PhoneNumber number="403-243-1000" color="inherit">
            (403) 243-1000
          </PhoneNumber>
        }
      />
      {/*<IconText
        Icon={SMSIcon}
        text={
          <PhoneNumber number="587-429-4268" color="inherit">
            (587) 429-4268
          </PhoneNumber>
        }
      />*/}
      <IconText
        Icon={EmailIcon}
        text={
          <Link color="textPrimary" href="mailto:sushiichibanmacleod@gmail.com">
            sushiichibanmacleod@gmail.com
          </Link>
        }
      />
    </div>
  )
}
