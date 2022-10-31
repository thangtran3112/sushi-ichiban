import { createContext, useContext } from "react"

const NavigationContext = createContext()

export const useNavigationContext = () => useContext(NavigationContext)

export default NavigationContext
