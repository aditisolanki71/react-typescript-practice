export type profileProps = {
   name: string
}
const Profile = (props: profileProps) => {
   return (
      <div>Profile {props.name}</div>
   )
}
export default Profile;