import React from "react";
import Drawer from "./Drawer";

export default function SmartDialogDrawer({ open, onClose, children }) {
  return (
    <Drawer open={open} onClose={onClose}>
      {children}
    </Drawer>
  );
}
