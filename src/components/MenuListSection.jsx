import React, { useEffect, useLayoutEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

export default function MenuListSection({
  id,
  setVisibleSection,
  index,
  setRef,
  children,
}) {
  const scrollRef = useRef()
  const [ref, inView] = useInView({
    threshold: 0.1,
  })

  useLayoutEffect(() => {
    if (inView) setVisibleSection(index)
  }, [inView, index, setVisibleSection])

  useEffect(() => {
    setRef(index, scrollRef)
  }, [setRef, index])

  return (
    <div ref={scrollRef}>
      <div ref={ref} id={id}>
        {children}
      </div>
    </div>
  )
}
