import React from "react";

//Statefull component
export default class Bike extends React.Component{
	
	render(){
		return(
		<div>
			<h2>Bike Details</h2>
			<div>Vechile Name: {this.props.name}</div>
			<div>Vechile Engine: {this.props.engine}</div>
			<div>Vechile Color: {this.props.bodyColor}</div>
		</div>)
	}
}