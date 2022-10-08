import SubAdvance from "./SubAdvance";
import Advance from "./Advance"
import Optional from "./Optional"
type advanceTypeProps = {
   status: 'loading' | 'pending' | 'error' | 'success',
   children: React.ReactNode
}
const AdvanceType = (props: advanceTypeProps) => {
   let message;
   if(props.status === 'loading') {
      message = "loading..."
   }
   else if(props.status === 'pending') {
      message = "pending..."
   }
   else if(props.status === 'success') {
      message = "Success..."
   }
   else if(props.status === 'error') {
      message = "error..."
   }
   return (
      <div>
         <h1>Advance Type</h1>
         <h4>* Union = status is:- {message}</h4>
         <h4>* children string= {props.children}</h4>
         <SubAdvance>
               <Advance>advance component</Advance>
         </SubAdvance>
         <h4>* Optional example = </h4>
         <Optional message="This is optional example"/>
         <Optional name="optional2" message="This is optional2 example"/>
      </div>
   )
}
export default AdvanceType;