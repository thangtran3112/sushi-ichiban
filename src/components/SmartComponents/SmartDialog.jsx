import React from "react"
import { Dialog, useMediaQuery } from "@material-ui/core"

export default function SmartDialog({ children, breakpoint = "xs", ...props }) {
  const fullScreen = useMediaQuery((theme) =>
    theme.breakpoints.down(breakpoint)
  )

  return (
    <Dialog fullScreen={fullScreen} {...props}>
      {children}
    </Dialog>
  )
}
