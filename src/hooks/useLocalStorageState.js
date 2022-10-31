import { useCallback, useState } from "react"

export const useLocalStorageValue = (key, defaultValue) => {
  let defaultState = defaultValue

  if (typeof window !== "undefined")
    defaultState = localStorage.getItem(key) || defaultValue

  const [state, setState] = useState(defaultState)
  const setValue = useCallback(
    (value) => {
      setState(value)
      if (typeof window !== "undefined") {
        localStorage.setItem(key, value)
      }
    },
    [key, setState]
  )

  return {
    value: state,
    setValue,
  }
}
