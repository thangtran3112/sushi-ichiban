import { createContext, useContext } from "react"

const CustomThemeContext = createContext()

export const useCustomTheme = () => useContext(CustomThemeContext)

export default CustomThemeContext
