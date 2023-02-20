**Prerequisites:**
Familiarity with the core HTML, CSS, and JavaScript languages, knowledge of the terminal/command line.
React uses an HTML-in-JavaScript syntax called JSX (JavaScript and XML). Familiarity with both HTML and JavaScript will help you to learn JSX, and better identify whether bugs in your application are related to JavaScript or to the more specific domain of React.

# Introduction
React is a library for building user interfaces. React is not a framework – it's not even exclusive to the web. It's used with other libraries to render to certain environments. For instance, React Native can be used to build mobile applications.

## Why learn ReactJS?
React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

## JSX
JSX is an HTML-like syntax used by React that extends ECMAScript so that HTML-like syntax can co-exist with JavaScript/React code. The syntax is used by preprocessors (i.e., transpilers like babel) to transform HTML-like syntax into standard JavaScript objects that a JavaScript engine will parse.

```
<div>Hello JavaTpoint</div>
Corresponding Output
React.createElement("div", null, "Hello JavaTpoint");
```
**JSX Features**
- It is faster than regular JavaScript because it performs optimization while translating the code to JavaScript.
- Instead of separating technologies by putting markup and logic in separate files, React uses components that contain both. We will learn components in a further section.
- It is type-safe, and most of the errors can be found at compilation time.
- It makes easier to create templates.

**JSX Attributes**

In JSX, we can specify attribute values in two ways:
- As String Literals ```var element = <h2 className = "firstAttribute">Hello JavaTpoint</h2>;```
- As Expressions ``` var element = <h2 className = {varName}>Hello JavaTpoint</h2>;  ```


<i>To use custom attributes in JSX, we need to use data- prefix. In the below example, we have used a custom attribute data-demoAttribute as an attribute for the p tag.
</i>


**JSX Comments**

JSX allows us to use comments that begin with `/*` and ends with `*/` and wrapping them in curly braces {} just like in the case of JSX expressions.

`  {/* This is a comment in JSX */}  `

**JSX Styling**

React always recommends to use inline styles.

```
render(){  
      var i = 5;  
      return (  
         <div>  
            <h1>{i == 1 ? 'True!' : 'False!'}</h1>  
         </div>  
      );  
```

**Immutability Is Important**

- Data Change with Mutation

```
var player = {score: 1, name: 'Jeff'};
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}
```

- Data Change without Mutation

```
var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});
// Now player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}

// Or if you are using object spread syntax, you can write:
// var newPlayer = {...player, score: 2};
```

## React Installation
Using the command-line interface (CLI) tool create-react-app. You need to have Node.js installed.

**Getting Started with Create React App**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Available Scripts**

In the project directory, you can run: `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.

Launches the test runner in the interactive watch mode. `npm test`

Builds the app for production to the `build` folder. `npm run build`

It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Application structure

```
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js
```
### package.json
**private: true** - npm will refuse to publish it within npm ecosystem. This is a way to prevent the accidental publication of private repositories.

**dependencies** - another package that your package needs in order to work.

**testing-library** - Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase.

- **react** - holds the react source for components, state, props and all the code that is react and is responsible for creating views.

- **react-dom** - is responsible to actually render UI in the browser. is the glue between React and the DOM

- **react-scripts** - scripts to run the build tools required to transform React JSX syntax into plain JavaScript programmatically

- **web-vitals** - provide clear guidance on what metrics matter and how to measure them. Checks code performance.

**scripts** - supports a number of built-in scripts and their preset life cycle events as well as arbitrary scripts.

**eslintConfig** - covers both code quality and coding style issues.

**browserslist** - allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file.

### package-lock.json 
holds information on the dependencies or packages installed for a node. js project, including their exact version numbers.

manifest.json: provides information about a web application in a JSON text file

favicon: a visual reminder of the Web site identity in the address bar or in tabs.

robots.txt: instructions for search engine robots that tells them which pages they should and shouldn't crawl. 

### App.js
file consists of three main parts: some import statements at the top, the App component in the middle, and an export statement at the bottom.


# React Basics
## 1. React Components
render(element, container[, callback]) - to display the specified HTML code inside the specified HTML element.

React.js library has two components:
Function Components

```
function Footer() {
  return (
    <div className="App">
      <h1>Footer</h1>
    </div>
  );
}
export default Footer;
```

Class Component

```
import React from 'react';
class Header extends React.Component {
	render() {
		return (
			<div className="App">
				<h1>Header</h1>
			</div>
		);
	}
}
export default Header;
```

## 2. React State vs Props
- Props are read-only components. It is an object which stores the value of attributes of a tag. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
- The state is an updatable structure that is used to contain data or information about the component and can change over time. It can only be accessed or modified inside the component or by the component directly.


### 2.1 Stateless Components vs Stateful Components
Stateless Component - have no state. They can also use props.

```
import React from "react";
export default class Weak extends React.Component{
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
```

Stateful Component - that holds some state. both types of components can use props.

```
import React from "react";
import Weak from "./Weak";
export default class Strong extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			 name : "Atindra",
			 age : "15",
			 address : "Bangalore India"
		};
	}
	render(){
		return(
		<div>
		This is {this.props.name} component
			<Weak params={this.state} />]
		</div>)
	}
}
```

## 3. Building Reuseable Components
Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.
### 3.1 Passing Data Through Props
Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an <img>

```
return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Atindra"
      width={100}
      height={100}
    />
  );
```
### 3.2 Passing Data to Components
pass any props to your own components

```
render(){
		return(
		<div>
		This is {this.props.name} component
			<Child params={this.state} />
			<Clock />
		</div>)
	}
```
### 3.3 Passing JSX as children
Sometimes you’ll want to nest your own components the same way:

```
import Child from './Child.js';

function Parent({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Parent>
      <Child
        size={100}
        person={{ 
          name: 'Atindra',
          age: '30'
        }}
      />
    </Parent>
  );
}

```
## 4. React Props Validation
Props validation is a tool that will help the developers to avoid unexpected bugs. It makes your code more readable. React components used special property PropTypes that help you to catch bugs by validating data types of values passed through props, although it is not necessary to define components with propTypes.

[Exercise on PropType](https://github.com/amableati/react-tutorial/blob/master/src/PropTypesValidation.js)

### 4.1 Validating Props with PropTypes
All React component classes that have a constructor should start with a super(props) call.
## 5. React Constructor
**points to note about a constructor are:**

- It is not necessary to have a constructor in every component.
- It is necessary to call super() within the constructor. To set property or use 'this' inside the constructor it is mandatory to call super().
- Never call setState() inside constructor()
- Bind events all in one place
- Avoid Assigning values from this.props to this.state,moreover the constructor function is not always the right place to do API calls

## 6. React Component API
ReactJS component is a top-level API. It makes the code completely individual and reusable in the application. It includes various methods for:

- Creating elements
- Transforming elements
- Fragments

### 6.1 setState()
method is used to update the state of the component. This method will not replace the state, but only add changes to the original state.

### 6.2 forceUpdate
to update the component manually

### 6.3 ReactDOM.findDOMNode()
to manipulate DOM

```
class ReactAPI extends React.Component {
   constructor() {
      super();
	  this.state = {
         data: []
      }
      this.setStateHandler = this.setStateHandler.bind(this);
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
	  this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
   };
   
   setStateHandler() {
      var item = Number.parseInt(Math.random()*10)
      var myArray = this.state.data.slice();
	  myArray.push(item);
      this.setState({data: myArray}); //1st method
   };
   
   forceUpdateHandler() {
      this.forceUpdate(); //2nd method
   };
   
   findDomNodeHandler() {
      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'green'; //3rd method
   };
	

   render() {
      return (
         <div className="panel">
			<p><b>React Component API</b></p>
			<button onClick = {this.setStateHandler}>SET STATE</button>
            <h4 id = "myDiv">State Array: {this.state.data}</h4>
			<button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {Number.parseInt(Math.random()*10)}</h4>
            <button onClick = {this.findDomNodeHandler}>CHANGE COLOR OF ARRAY</button>
         </div>
      );
   }
}
```
## 11. Component Life Cycle
Components in React have a lifecycle which allows you to execute functions as it goes through it’s three main phases:

- Mounting
- Updating
- Unmounting

![Component Life Cycle](https://miro.medium.com/v2/resize:fit:828/format:webp/1*nleLui-x8YNJhZaEwwLioQ.png)

```
import React from "react";
import "./App.css";


export default class ReactLifeCycle extends React.Component{
	
	constructor(props){//1st call
		super(props);
		
		this.state = {
			vehicle : "car",
			enableUpdate: true,
			display:false
		}
		
		this.toToggleUpdate = this.toToggleUpdate.bind(this);
		this.toUpdateVehicle = this.toUpdateVehicle.bind(this);
		this.toggleNewComponent = this.toggleNewComponent.bind(this);
	}
	
	static getDerivedStateFromProps(props, state) { //2nd call
    /*Calls twice when initiating mount and on subsequent updates. 
    return an object to update the state, or null to update nothing.*/
		console.log("getDerivedStateFromProps: "+props.vehicle);
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
			<span color="red">{this.state.enableUpdate}</span>
			<button onClick={this.toUpdateVehicle}>Update Vehicle</button>
			{this.state.display && <NewComponent />}
			<button onClick={this.toggleNewComponent}>+/-</button>
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


```

### The Component Lifecycle
Lifecycle methods
## 12. React Forms
### Handling Form State
## 13. Controlled vs Uncontrolled
## 14. React Events
## 15. Conditional Rendering
## 16. React Lists
## 17. React Keys
## 18. React Refs
## 19. React Fragments
## 20. React Router
## 21. Better Classes with Class Fields
## 22. React CSS
## 23. React Bootstrap
## 24. React Map
## 25. React Table
## 26. Higher-Order Components
## 27. React Code Splitting
### Performance Gains with Code Splitting
## 28. Code Sharing in React
## 29. React Context
### [Bypassing Props with React Context](https://denislistiadi.medium.com/react-hooks-bypass-props-with-usecontext-performance-d65ea934859)


# React Advance Topics
## 1. React Hooks
### [Managing State](https://beta.reactjs.org/learn/managing-state#reacting-to-input-with-state)
How to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components.
this.state
## 2. React Flux Concept
## 3. React Redux
## 4. React Portals
## 5. React Error Boundaries
## 6. Production Builds and Hosting