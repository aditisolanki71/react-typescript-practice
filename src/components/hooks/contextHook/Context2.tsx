import { User } from "./User";
import { UserContextProvider } from "./UserContext"
const Context = () => {
   return (
      <div>
         <h1>*Use Context Hook = USER</h1>
         <UserContextProvider>
            <User />
         </UserContextProvider>
      </div>
   )
}
export default Context;