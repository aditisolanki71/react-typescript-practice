type optionalProps = {
   name?: string;
   message: string
}
const Optional = (props:optionalProps ) => {
   return (
      <div>
         {props.name} - {props.message}
      </div>
   )
}
export default Optional;