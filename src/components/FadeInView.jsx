import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const START_X = 400

export default function FadeInView({
  startX = START_X,
  slide,
  noFade,
  duration = 0.5,
  children,
}) {
  const [ref, inView] = useInView()
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: !noFade ? (inView ? 1 : 0) : 1,
      x: slide ? (inView ? 0 : startX) : 0,
      transition: { duration },
    })
  }, [noFade, slide, inView, controls, duration, startX])

  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <motion.div animate={controls}>{children}</motion.div>
    </div>
  )
}
