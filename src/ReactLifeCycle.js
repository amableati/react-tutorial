import React from "react";
import "./App.css";


export default class ReactLifeCycle extends React.Component{
	
	constructor(props){//1st call
		super(props);
		
		this.state = {
			vehicle : "car",
			enableUpdate: true,
			display: false
		}
		
		this.toToggleUpdate = this.toToggleUpdate.bind(this);
		this.toUpdateVehicle = this.toUpdateVehicle.bind(this);
		this.toggleNewComponent = this.toggleNewComponent.bind(this);
	}
	
	static getDerivedStateFromProps(props, state) { //2nd call
    /*Calls twice when initiating mount and on subsequent updates. 
    return an object to update the state, or null to update nothing.*/
		console.log("getDerivedStateFromProps "+props.vehicle+" recieved");
		return null;
    }

    shouldComponentUpdate(){//3rd call
    /*Return a Boolean value that specifies whether 
    React should continue with the rendering or not*/
        return this.state.enableUpdate;
    }

	getSnapshotBeforeUpdate(prevProps, prevState) {//5th call
        /*To capture some information from the DOM
         Without a componentDidUpdate() definition, React outputs a warning message.*/
        if (prevState.vehicle !== this.state.vehicle) {
            return this.state.vehicle + "<-" + prevState.vehicle;
        }else
            return null;
    }

	componentDidUpdate(prevProps, prevState, snapshot){//6th call
        /*Is not called for the initial render.
        To wrap the logical in a conditional so that you don’t execute it on every state or props change.*/
        if(snapshot !== null){
            console.log("componentDidUpdate: "+snapshot);
        }
    }

	componentDidMount(){//7th call
        /*Initialize the require DOM nodes.
        Good place to instantiate the API request.*/
        setTimeout(()=>{
            this.setState({vehicle : "bus"});
        }, 10000);
    }


//Custom Method
	toToggleUpdate(){
		this.setState({enableUpdate: !this.state.enableUpdate});
	}
	
	toUpdateVehicle(){
		this.setState({vehicle: "bike"});
	}
	
	toggleNewComponent() {
        this.setState({display: !this.state.display});
    }
	
	render(){//4th call
		
		return(
			<div className="panel-2">
			<h4>React Componet Life Cycle</h4>
			<p>Vehicle : {this.state.vehicle}</p>
			<button onClick={this.toToggleUpdate}>Toggle Update ({this.state.enableUpdate?"Yes":"No"})</button>
			<button onClick={this.toUpdateVehicle}>Update Vehicle</button>
			{this.state.display && <NewComponent />}<br />
            {<button onClick={this.toggleNewComponent}>+/-</button>}
			</div>
		)
	}
}




class NewComponent extends React.Component{

    componentWillUnmount(){//8th call
        /*Perform any necessary cleanup in this method, such as invalidating timers,
        canceling network requests, or cleaning up any subscriptions that were 
        created in componentDidMount().
        Should not be called setState() in this method.*/
        alert('New Component is getting removed');
    }
    
    render(){
        
        return(
            <div className="panel-1">
                A New Component
            </div>
            )
    }
    
}



