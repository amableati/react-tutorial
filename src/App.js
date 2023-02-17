import './App.css';
//import PropTypesValidation from "./PropTypesValidation";
import Vehicle from "./Vehicle";
import ReactAPI from "./ReactAPI";

function App() {
  return (
    <div className="panel-2">
      <h3>Welcome to React Web Application</h3>
	  <h2>Current time is {new Date().toLocaleTimeString()}</h2>
	  <Vehicle />
	  <ReactAPI />
    </div>
  );
}

export default App;