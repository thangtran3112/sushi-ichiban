import React from "react";
import { Dialog as MuiDialog } from "@material-ui/core";

export default function Dialog({ children, open, onClose }) {
  return (
    <MuiDialog open={open} onClose={onClose}>
      {children}
    </MuiDialog>
  );
}
