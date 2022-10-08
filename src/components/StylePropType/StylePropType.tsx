import Container from "./Container";

const StylePropType = () => {
   return (
      <div>
         <h4>* StylePropType</h4>
         <div style={{color: "red"}}>Style1</div>
         <Container style={{border: "1px solid black", color: "pink"}}/>
      </div>
   )
}
export default StylePropType;