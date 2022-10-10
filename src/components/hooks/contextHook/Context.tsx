import Box from "./Box";
import { ThemeContextProvider } from "./ThemeContext"
const Context = () => {
   return (
      <div>
         <h1>*Use Context Hook = Box </h1>
         <ThemeContextProvider>
            <Box />
         </ThemeContextProvider>
      </div>
   )
}
export default Context;