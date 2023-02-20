import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Header from "./header";
import Footer from "./footer";
import Parent from "./Parent";


const root = ReactDOM.createRoot(document.getElementById('root'));

//function tick(){ 
root.render(
  <React.StrictMode>
	<Header name="top"/>
    <App />
	<Parent name="Parent"/>
	
	<Footer />
  </React.StrictMode>
);
//}

// This will report metrics into a console.
//reportWebVitals(console.log);


//setInterval(tick, 1000);












