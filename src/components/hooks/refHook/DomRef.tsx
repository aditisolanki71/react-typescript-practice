import { useRef, useEffect } from "react";
const DomRef= () => {
   const inputRef = useRef<HTMLInputElement>(null!);
   useEffect(() => {
      inputRef.current.focus();
   },[])
   return (
      <div>
         Dom Ref
         <input type="text" ref={inputRef} />
      </div>
   )
}
export default DomRef;