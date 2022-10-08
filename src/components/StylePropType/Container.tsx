type containerProps = {
   style: React.CSSProperties
}

const Container = (props: containerProps) => {
   return (
      <div>Container
         <h4 style={props.style}>Aditi</h4>
      </div>
   )
}
export default Container;