type basicTypeProps = {
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
const BasicType = (props: basicTypeProps) => {
   return (
      <div>
         <h1>Basic Type</h1>
         {props.isLoggesIn ? (
            <>
               <h4>* String = Hello {props.name}</h4>
               <h4>* Object = Welcome {props.fullName.first} {props.fullName.last}</h4>
               <h4>* Number = Age {props.age}</h4>
               <h4>* Array = My Hobbies are:- {props.hobbies} </h4>
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
         <h6>Welcome Guest!!!</h6>}
      </div>
   )
}
export default BasicType;