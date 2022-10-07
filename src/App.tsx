import './App.css';
import Greet from './components/Greet';
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
      <Greet 
        name="Aditi" 
        age={20} 
        isLoggesIn
        fullName={personObject}
        hobbies={hobbiesArray}
        personList={personListArray}
      />
    </div>
  );
}

export default App;
