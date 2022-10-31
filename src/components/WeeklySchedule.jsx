import React from "react"
import clsx from "clsx"
import { makeStyles, Grid, Typography } from "@material-ui/core"

function makeSchedule(day, hours) {
  return { day, hours }
}

const defaultSchedule = [
  makeSchedule("Monday (evening only)", "4:00pm — 9:30pm"),
  makeSchedule("Tuesday", "11:00am — 9:30pm"),
  makeSchedule("Wednesday", "11:00am — 9:30pm"),
  makeSchedule("Thursday", "11:00am — 9:30pm"),
  makeSchedule("Friday", "11:00am — 10:00pm"),
  makeSchedule("Saturday", "11:00am — 10:00pm"),
  makeSchedule("Sunday", "11:00am — 9:30pm"),
]

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
  },
  fiddy: {
    flexBasis: "50%",
  },
}))

export default function WeeklySchedule({
  className,
  dailySchedule = defaultSchedule,
}) {
  const classes = useStyles()

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      justify="space-between"
    >
      {dailySchedule.map((s) => (
        <React.Fragment key={s.day}>
          <Grid className={classes.fiddy} key={`${s.day}_day`} item>
            <Typography variant="subtitle2">{s.day}</Typography>
          </Grid>
          <Grid className={classes.fiddy} key={`${s.day}_hours`} item>
            <Typography variant="subtitle2">{s.hours}</Typography>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  )
}
