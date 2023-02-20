import './App.css';
import Vehicle from "./Vehicle";
import ReactAPI from "./ReactAPI";
import ReactLifeCycle from "./ReactLifeCycle";

function App() {
  return (
    <div className="panel-2">
      <h3>Welcome to React Web Application</h3>
	  <h2>Current time is {new Date().toLocaleTimeString()}</h2>
	  <Vehicle />
	  <ReactAPI />
	  <ReactLifeCycle vehicle="truck" />
    </div>
  );
}

export default App;