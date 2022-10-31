import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

export default function NavBar({ children, elevation = 0, ...props }) {
  return (
    <AppBar position="sticky" elevation={0} {...props}>
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
}
