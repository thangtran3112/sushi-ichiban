import React, { useRef, useState, useCallback } from "react"
import {
  Grid,
  makeStyles,
  Typography,
  Tabs,
  Tab,
  Hidden,
} from "@material-ui/core"
import MenuItem from "./MenuItem"
import { menu } from "../menu/menu"
import MenuListSection from "./MenuListSection"
import { useNavigationContext } from "../NavigationContext"

const useStyles = makeStyles((theme) => ({
  tabs: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2, 0),
    position: "sticky",
    top: ({ top }) => top,
  },
  category: {
    padding: theme.spacing(2),
  },
  item: {
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "50%",
    },
    padding: theme.spacing(1),
  },
  notice: {
    padding: theme.spacing(2),
  },
  extraInfo: {
    padding: theme.spacing(1),
  },
}))

const MenuList = () => {
  const top = useNavigationContext()
  const classes = useStyles({ top })
  const sectionRefs = useRef(menu.map(() => null))
  const setSectionRef = useCallback((index, ref) => {
    sectionRefs.current[index] = ref
  }, [])

  const [value, setValue] = useState(0)

  const handleChange = (_, newValue) => {
    window.scrollTo({
      top: sectionRefs?.current[newValue]?.current?.offsetTop - 100,
      left: 0,
    })
    setValue(newValue)
  }

  const tabs = menu.map((c) => <Tab key={c.name} id={c.name} label={c.name} />)

  return (
    <>
      <Hidden xsDown>
        <Tabs
          className={classes.tabs}
          indicatorColor="primary"
          value={value}
          onChange={handleChange}
          variant="fullWidth"
        >
          {tabs}
        </Tabs>
      </Hidden>
      <Hidden smUp>
        <Tabs
          className={classes.tabs}
          indicatorColor="primary"
          value={value}
          onChange={handleChange}
          variant="scrollable"
        >
          {tabs}
        </Tabs>
      </Hidden>
      {menu.map((c, i) => (
        <MenuListSection
          key={c.name}
          id={`${c.name}_section`}
          index={i}
          setVisibleSection={setValue}
          setRef={setSectionRef}
        >
          <Hidden xsDown>
            <Typography
              className={classes.category}
              variant="h3"
              align="center"
            >
              {c.name}
            </Typography>
          </Hidden>
          <Hidden smUp>
            <Typography
              className={classes.category}
              variant="h5"
              align="center"
            >
              {c.name}
            </Typography>
          </Hidden>
          {c.extraInfo &&
            c.extraInfo.map((e) => (
              <Typography
                key={e.id}
                className={classes.extraInfo}
                align="center"
              >
                {e.text}
              </Typography>
            ))}
          <Typography className={classes.notice} align="center">
            <i>
              Price listing on this page is for <b>in-store</b> or <b>phone</b>{" "}
              order only. For phone order, please mention the item numbers to our customer service.
            </i>
          </Typography>
          <Grid container justify="space-around">
            {c.items.map((item) => (
              <Grid className={classes.item} key={item.name} item>
                <MenuItem item={item} />
              </Grid>
            ))}
          </Grid>
        </MenuListSection>
      ))}
    </>
  )
}

export default MenuList
