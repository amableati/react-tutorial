import React from "react";
import Child from "./Child";
import Clock from "./Clock";

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
		<div>
		This is {this.props.name} component
			<Child params={this.state} />
			<Clock />
		</div>)
	}
}