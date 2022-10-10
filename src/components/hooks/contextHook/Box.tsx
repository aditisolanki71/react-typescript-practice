import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"
const Box = () => {
   const theme = useContext(ThemeContext);
   return (
      <div>
         Box context
         <div style={{ backgroundColor: theme.primary.main, color: theme.primary.main }}>Theme Contexttt</div>
      </div>
   )
}
export default Box;