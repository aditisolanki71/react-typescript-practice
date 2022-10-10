import Login from "./Login";
import { profileProps } from "./Profile";
type privateProps = {
   isLoggedIn: boolean,
   component: React.ComponentType<profileProps>
}
const Private = ({ isLoggedIn, component: Component }: privateProps) => {
   if(isLoggedIn) {
      return <Component name="Aditi"/>
   }
   else {
      return <Login />
   }
}
export default Private;