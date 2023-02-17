import React from "react";

//Statefull component
export default class Car extends React.Component{
	
	render(){
		return(
		<div>
			<h2>Car Details</h2>
			<div>Vechile Name: {this.props.name}</div>
			<div>Vechile Engine: {this.props.engine}</div>
			<div>Vechile Color: {this.props.bodyColor}</div>
		</div>)
	}
}