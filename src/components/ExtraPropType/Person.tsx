import { personProps } from "./Person.types"
const Person = (props: personProps) => {
   return (
      <div>
         <h4>{props.name.first} - {props.name.last}</h4>
      </div>
   )
}
export default Person;