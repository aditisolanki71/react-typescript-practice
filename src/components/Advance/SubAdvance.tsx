type subAdvanceProps = {
   children: React.ReactNode;
}
const SubAdvance = (props: subAdvanceProps) => {
   return (
      <div>
         <h4>* children component = </h4>
         <h4>{props.children}</h4>
      </div>
   )
}
export default SubAdvance;