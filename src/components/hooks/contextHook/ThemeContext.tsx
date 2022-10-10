import { createContext } from "react";
import { theme } from "./theme"
type themeContextProviderProps = {
   children: React.ReactNode
}
export const ThemeContext = createContext(theme);
export const ThemeContextProvider = (props: themeContextProviderProps) => {
   return (
      <ThemeContext.Provider value={theme}>
         {props.children}
      </ThemeContext.Provider>
   )
}