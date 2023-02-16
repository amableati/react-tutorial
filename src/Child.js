import React from "react";

//Stateless Component
export default class Child extends React.Component{
	render(){
		return(
		<>
			<h4>This is {this.props.params.name} component</h4>
			<div>My age is {this.props.params.age}</div>
			<div>I reside at {this.props.params.address}</div>
		</>
		)
	}
}