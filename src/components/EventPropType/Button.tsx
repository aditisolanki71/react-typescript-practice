type buttonProps = {
   handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = (props: buttonProps) => {
   return (
      <div>
         <button onClick={props.handleClick}>Click me</button>
      </div>
   )
}
export default Button;