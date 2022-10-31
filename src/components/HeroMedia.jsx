import React, { useRef } from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core"
import { useEffect } from "react"

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: -1,
    position: "absolute",
    objectFit: "cover",
    objectPosition: "center",
    maxWidth: "100%",
  },
  stretch: {
    height: "100%",
    width: "100%",
  },
  relative: {
    zIndex: 0,
    position: "relative",
  },
  vh70: {
    height: "70vh",
    width: "100%",
  },
}))

export default function HeroMedia({
  type = "image",
  className,
  src,
  stretch,
  alt,
  relative,
  vh70,
}) {
  const classes = useStyles()
  const ref = useRef(null)

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.play()
    }
  }, [ref])

  const heroMediaClassName = clsx(
    classes.root,
    {
      [classes.stretch]: stretch,
      [classes.relative]: relative,
      [classes.vh70]: vh70,
    },
    className
  )

  return type === "video" ? (
    <video
      ref={ref}
      className={heroMediaClassName}
      muted
      autoPlay
      playsInline
      preload="auto"
      loop
    >
      <source src={src} type="video/mp4" />
    </video>
  ) : (
    <img className={heroMediaClassName} src={src} alt={alt} />
  )
}
