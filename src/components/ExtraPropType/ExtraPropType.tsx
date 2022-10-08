import Person from "./Person";

const ExtraPropType = () => {
   const person = {
      first: "aditi",
      last: "solanki"
   }
   return (
      <Person name={person}/>
   )
}
export default ExtraPropType;