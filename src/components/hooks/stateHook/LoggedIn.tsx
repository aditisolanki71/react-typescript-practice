import { useState } from "react";
const LoggedIn = () => {
   const [isLoggedIn,setIsLoggedIn] = useState(false);
   const handleLogin = () => {
      setIsLoggedIn(true);
   }
   const handleLogout = () => {
      setIsLoggedIn(false);
   }
   return (
      <div>
         Logged in
         <button onClick={handleLogin}>Login</button>
         <button onClick={handleLogout}>Logout</button>
         <div>User is {isLoggedIn ? 'loggedin' : 'loggedout'}</div>
      </div>
   )
}
export default LoggedIn;