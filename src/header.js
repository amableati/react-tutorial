import './App.css';
import React from "react";

class Header extends React.Component{

constructor(props){
	super(props);	//calls parent constructor
	this.state = {
		name : this.props.name
	};
	
	this.state.name = "top 2";//correct
}


render(){
  return (
    <div className="App">
      <h1>Header</h1>
	  <p>This is inside {this.state.name} [state]</p>
	  <p>This is also at {this.props.name} [props]</p>
</div>
  );
}

}


export default Header;




































/*import './App.css';
import React from 'react';

class Header extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
	      name : 'Header'
	    };
	}
	
	
	render() {
		return (
			<div className="App">
				<h1>Header</h1>
				<p>This is {this.state.name} [state]</p>
				<p>Also at {this.props.name} [props]</p>
			</div>
		);
	}
}

export default Header;
*/