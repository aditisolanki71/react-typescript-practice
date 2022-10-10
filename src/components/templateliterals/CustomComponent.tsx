import React from "react";
import { Greet } from "./Greet";

//here we want same prop as Greet component
const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
   return (
      <div>{props.isLoggedIn}</div>
   )
}  
export default CustomComponent;