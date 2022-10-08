import Button from "./Button"
import Button2 from "./Button2"
import Input from "./Input"
const EventPropType = () => {
   return (
      <div>
         <h4>* Event Prop Type</h4>
         <Button handleClick={(event) => {
            console.log("button clicked",event)
         }}/>
         <Button2 handleClick2={(event,name) => {
            console.log("button2 is called",event)
            console.log("name is",name);
         }}/>
         <Input value="" handleChange={event => {
            console.log("input event is",event)
         }}/>
      </div>
   )
}
export default EventPropType;