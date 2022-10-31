import { useCallback, useState } from "react"

export default function useBooleanState(initial = false) {
  const [state, setState] = useState(initial)

  const setTrue = useCallback(() => setState(true), [])
  const setFalse = useCallback(() => setState(false), [])

  return [
    state,
    {
      setState,
      setTrue,
      setFalse,
    },
  ]
}
