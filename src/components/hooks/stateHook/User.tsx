import { useState } from "react";
type authUser = {
   name: string,
   email: string
}
const User = () => {
   const [user,setUser] = useState<null | authUser>(null);
   const handleLogin = () => {
      setUser({
         name: "Aditi",
         email: "adtsolanki22@gmail.com"
      })
   }
   const handleLogout = () => {
      setUser(null)
   }
   return (
      <div>
         <button onClick={handleLogin}>Login</button>
         <button onClick={handleLogout}>Logout</button>
         <div>user name {user?.name}</div>
         <div>user name {user?.email}</div>
      </div>
   )
}
export default User;