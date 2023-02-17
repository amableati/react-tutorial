import './App.css';
//import PropTypesValidation from "./PropTypesValidation";
import Vehicle from "./Vehicle";

function App() {
  return (
    <div className="App">
      <h3>Welcome to React Web Application</h3>
	  <h2>Current time is {new Date().toLocaleTimeString()}</h2>
	  <Vehicle />
    </div>
  );
}

export default App;