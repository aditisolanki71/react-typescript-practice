import React from "react";

type inputProps = {
   value : string,
   handleChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = (props: inputProps) => {
   const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log("input event2 called",event)
   }
   return (
      <div>
         Name:- <input type="text" value={props.value} onChange={props.handleChange} />
         Surname:- <input type="text" value={props.value} onChange={handleChange2} />
      </div>
   )
}
export default Input;