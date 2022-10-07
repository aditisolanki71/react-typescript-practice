type greetProps = {
   name: string,
   age: number,
   isLoggesIn: boolean,
   fullName: {
      first: string,
      last: string
   },
   hobbies: string[],
   personList: {
      first:string,
      last: string
   }[]
}
const Greet = (props: greetProps) => {
   return (
      <div>
         {props.isLoggesIn ? (
            <>
               <h1>Hello {props.name}</h1>
               <h2>Welcome {props.fullName.first} {props.fullName.last}</h2>
               <h2>Age {props.age}</h2>
               <h3>My Hobbies are:- {props.hobbies} </h3>
               <ul>
                  {props.personList.map((person,index) => (
                     <>
                        <li key={index}>{person.first} - {person.last}</li>
                     </>
                     )
                  )}
               </ul>
            </>   
         ) : 
         <h1>Welcome Guest!!!</h1>}
      </div>
   )
}
export default Greet;