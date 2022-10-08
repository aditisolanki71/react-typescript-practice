import './App.css';
import BasicType from './components/BasicType';
import AdvanceType from "./components/Advance/AdvanceType"
import EventPropType from "./components/EventPropType/EventPropType"
import StylePropType from "./components/StylePropType/StylePropType"
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
    </div>
  );
}

export default App;
