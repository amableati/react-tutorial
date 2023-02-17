import './App.css';
import React from "react";
import ReactDOM from "react-dom";

export default class ReactAPI extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			data : []
		}
		this.updateArray = this.updateArray.bind(this);
		this.forcefullyUpdate = this.forcefullyUpdate.bind(this);
		this.changeComponentColor = this.changeComponentColor.bind(this);
	}
	
	updateArray = ()=>{
	  var item = Number.parseInt(Math.random()*10);
      var myArray = this.state.data.slice();
      myArray.push(item);
      this.setState({data: myArray}); //1st method

	}
	
	forcefullyUpdate = ()=>{
		this.forceUpdate();//2nd method
	}
	
	changeComponentColor = () =>{
	  var myDiv = document.getElementById('array-color');
      ReactDOM.findDOMNode(myDiv).style.backgroundColor = 'green'; //3rd method
	}
	
	

render(){
  return (
    <div className="panel-2" id="array-color">
		<p>This is an Array {this.state.data}</p>
		<button onClick={this.updateArray}>Update Array Data</button>
		<p>Random Number : {Number.parseInt(Math.random()*10)}</p>
		<button onClick={this.forcefullyUpdate}>Refresh component</button><br/>
		<button onClick={this.changeComponentColor}>Change component color</button>
		
    </div>
  );
}	
}

