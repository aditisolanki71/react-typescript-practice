type GreetProps = {
   name: string
   messageCount?: number
   isLoggedIn: boolean
}
export const Greet = (props: GreetProps) => {
   const { messageCount = 0 } = props
   return (
      <div>
         <h4>
            {props.isLoggedIn ? `welcome ${props.name}` : 'welcome guest'}
         </h4>
      </div>
   )
}