import React from "react";

type buttonProps2 = {
   handleClick2: (event: React.MouseEvent<HTMLButtonElement>,name: string) => void;
}
const Button2 = (props: buttonProps2) => {
   return (
      <div>
         <button onClick={(event) => props.handleClick2(event,"aditi")}>Click me2</button>
      </div>
   )
}
export default Button2;