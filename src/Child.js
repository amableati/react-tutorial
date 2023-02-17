import React from "react";
import './App.css';

//Stateless Component
export default class Child extends React.Component{
	render(){
		return(
		<>
		<div className="panel-1">
			<h4>This is {this.props.params.name} component</h4>
			<div>My age is {this.props.params.age}</div>
			<div>I reside at {this.props.params.address}</div>
		</div>
		</>
		)
	}
}