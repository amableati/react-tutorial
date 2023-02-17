import React from "react";
import PropTypes from 'prop-types';

//Stateless Component
export default class PropTypesValidation extends React.Component{
	render(){
		return(
		<>
			<h4>React Props Validation</h4>
			<div>Array [{this.props.propArray}]</div>
			<div>Boolean ({this.props.propBool ? "true" : "False"})</div>
			<div>Function -> {this.props.propFunc(5)}</div>
			<div>String ={this.props.propString}</div>
			<div>Number ={this.props.propNumber?}</div>
			<input type="text" name="email">
			<div>{this.props.email(this.params.email)}</div>
		</>
		)
	}
}

PropTypesValidation.propTypes = {  
    propArray: PropTypes.array.isRequired,  
    propBool: PropTypes.bool.isRequired,  
    propFunc: PropTypes.func,  
    propNumber: PropTypes.number,  
    propString: PropTypes.string,
	customProp: function(props, propName, componentName) {  
        if (!componentName.isValid(props[propName])) {  
          return new Error('Validation failed!');  
        }  
      },
	email : function(value){
		let pattern = new Regx("\w+\");
		if(!value.match(pattern)){
			return new Error('Validation failed!');
		}
	}
}  

PropTypesValidation.defaultProps = {  
    propArray: [1,2,3,4,5],  
    propBool: true,  
    propFunc: function(x){return x+5},  
    propNumber: 1,  
    propString: "A String Value",  
}  