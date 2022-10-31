import React from "react"
import SmartDialog from "./SmartComponents/SmartDialog"
import {
  makeStyles,
  DialogTitle,
  DialogContent,
  Toolbar,
  IconButton,
  Typography,
  DialogActions,
  Button,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import ContactSection from "./ContactSection"
import WeeklySchedule from "./WeeklySchedule"
import PhoneNumber from "./PhoneNumber"
import PhoneIcon from "@material-ui/icons/Phone"

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: "space-between",
  },
  spacing: {
    margin: theme.spacing(2, 0),
  },
}))

export default function ReservationsDialog({ open, onClose }) {
  const classes = useStyles()

  return (
    <SmartDialog open={open} onClose={onClose}>
      <DialogTitle>
        <Toolbar className={classes.toolbar} disableGutters>
          <Typography variant="h4">Reservations</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </DialogTitle>
      <DialogContent>
        <ContactSection />
        <WeeklySchedule className={classes.spacing} />
      </DialogContent>
      <DialogActions>
        <Button
          className={classes.spacing}
          endIcon={<PhoneIcon />}
          color="primary"
          fullWidth
          size="large"
          variant="outlined"
        >
          <PhoneNumber number="403-243-1000" color="inherit">
            Call 403-243-1000
          </PhoneNumber>
        </Button>
      </DialogActions>
      <DialogActions>
        <Button
          className={classes.spacing}
          endIcon={<PhoneIcon />}
          color="primary"
          fullWidth
          size="large"
          variant="outlined"
        >
          <PhoneNumber number="587-429-4268" color="inherit">
            Text 587-429-4268
          </PhoneNumber>
        </Button>
      </DialogActions>
    </SmartDialog>
  )
}
