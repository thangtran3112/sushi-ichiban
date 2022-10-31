import { createContext, useContext } from "react"

const LocationContext = createContext()

export default LocationContext

export function useLocationContext() {
  return useContext(LocationContext)
}
