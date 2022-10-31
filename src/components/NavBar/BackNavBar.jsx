import React from "react";
import { IconButton } from "@material-ui/core";
import BackIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";

export default function BackNavBar({ to, children, ...props }) {
  const history = useHistory();

  const onClick = () => (to ? history.replace(to) : history.goBack());

  return (
    <NavBar {...props}>
      <IconButton onClick={onClick}>
        <BackIcon />
      </IconButton>
      {children}
    </NavBar>
  );
}
