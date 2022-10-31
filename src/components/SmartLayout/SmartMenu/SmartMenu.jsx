import React, { useEffect, useState } from "react";
import clsx from "clsx";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  makeStyles,
  useMediaQuery,
  ClickAwayListener,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { MAX_DRAWER_WIDTH } from "../../../constants";
import { useLocation } from "react-router";
import { useSmartLayoutContext } from "../SmartLayoutContext";
import NavBar from "../../NavBar";

const useDrawerStyles = makeStyles((theme) => ({
  paper: {
    width: MAX_DRAWER_WIDTH,
    [theme.breakpoints.down("md")]: {
      width: 56,
    },
    [theme.breakpoints.down("xs")]: {
      width: MAX_DRAWER_WIDTH,
    },
  },
  expanded: {
    width: MAX_DRAWER_WIDTH,
  },
  open: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  close: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  smMenu: {
    padding: theme.spacing(0, 0.5),
  },
}));

export default function SmartMenu({ children }) {
  const classes = useDrawerStyles();
  const smMd = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const smDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const xs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const location = useLocation();
  const [open, setOpen] = useState();
  const { menuExpanded, setMenuExpanded } = useSmartLayoutContext();

  useEffect(() => {
    if (xs) setOpen(false);
  }, [xs, location.pathname]);

  useEffect(() => {
    if (smUp) setOpen(true);
  }, [smUp]);

  const variant = smUp && open ? "permanent" : "temporary";

  return (
    <>
      {xs && (
        <NavBar color="default">
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </NavBar>
      )}
      <Drawer
        classes={{
          paper: clsx(classes.paper, {
            [classes.open]: open,
            [classes.close]: !open,
            [classes.expanded]: menuExpanded,
          }),
        }}
        open={open}
        onClose={() => setOpen(false)}
        variant={variant}
      >
        <ClickAwayListener
          onClickAway={() => (smDown ? setMenuExpanded(false) : null)}
        >
          <List dense disablePadding>
            {smMd && (
              <ListItem className={classes.smMenu} disableGutters>
                <IconButton onClick={() => setMenuExpanded(!menuExpanded)}>
                  {menuExpanded ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </ListItem>
            )}
            {React.Children.map(children, (c) => (
              <ListItem disableGutters>{c}</ListItem>
            ))}
          </List>
        </ClickAwayListener>
      </Drawer>
    </>
  );
}
