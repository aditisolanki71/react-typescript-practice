import DomRef from "./DomRef";
import MutableRef from "./MutableRef";

const RefHook = () => {
   return (
      <div>
         <DomRef />
         <MutableRef />
      </div>
   )
}
export default RefHook;