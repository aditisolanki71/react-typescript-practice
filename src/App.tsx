import './App.css';
import BasicType from './components/BasicType';
import AdvanceType from "./components/Advance/AdvanceType"
import EventPropType from "./components/EventPropType/EventPropType"
import StylePropType from "./components/StylePropType/StylePropType"
import ExtraPropType from "./components/ExtraPropType/ExtraPropType"
import StateHook from './components/hooks/stateHook/StateHook';
import { Counter } from './components/hooks/reducerHook/Counter';
import Context from './components/hooks/contextHook/Context';
import Context2 from "./components/hooks/contextHook/Context2"
import RefHook from "./components/hooks/refHook/RefHook"
function App() {
  const personObject = {
    first: "Adi",
    last: "Solanki"
  }
  const hobbiesArray = [" singing ", " dancing "," coding "];
  const personListArray = [
    {
      first: "Moni",
      last: "solanki"
    },
    {
      first: "Arjun",
      last: "solanki"
    }
  ]
  return (
    <div className="App">
      <BasicType 
        name="Aditi" 
        age={20} 
        isLoggesIn
        fullName={personObject}
        hobbies={hobbiesArray}
        personList={personListArray}
      />
      <AdvanceType status="success">
          <p>Children component</p>
          <p>Helloo...</p>
      </AdvanceType>
      <EventPropType />
      <StylePropType />
      <ExtraPropType />
      <h1>Hooks</h1>
      <StateHook />
      <Counter />
      <Context />
      <Context2 />
      <RefHook />
    </div>
  );
}

export default App;
