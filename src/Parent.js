import React from "react";
import Child from "./Child";
import Clock from "./Clock";
import './App.css';

//Statefull component
export default class Parent extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			 name : "Child",
			 age : "15",
			 address : "Bangalore India"
		};
	}
	
	render(){
		return(
		<div className="panel">
		This is {this.props.name} component
			<Child params={this.state} />
			<Clock />
		</div>)
	}
}