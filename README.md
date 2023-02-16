# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.
### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

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

JSX allows us to use comments that begin with /* and ends with */ and wrapping them in curly braces {} just like in the case of JSX expressions.
```  {/* This is a comment in JSX */}  ```

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

```
npx create-react-app first-react
cd first-react
npm start
```
will start being served at a local server at localhost:3000

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

## 2. React State & Props
- Props are read-only components. It is an object which stores the value of attributes of a tag. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
- The state is an updatable structure that is used to contain data or information about the component and can change over time. It can only be accessed or modified inside the component or by the component directly.


### 2.1 Stateless Components vs Stateful Components
## 3. Building Reuseable Components
### Passing Data Through Props
### Passing Data to Components
### Passing JSX as children
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
## 6. React Props Validation
### Validating Props with PropTypes
All React component classes that have a constructor should start with a super(props) call.
## 7. React State vs Props
### Managing State
this.state
### Bypassing Props with React Context
## 8. React Constructor
## 9. React element 
createElement()
## 10. React Component API
## 11. Component Life Cycle
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


# React Advance Topics
## 1. React Hooks
## 2. React Flux Concept
## 3. React Redux
## 4. React Portals
## 5. React Error Boundaries
## 6. Production Builds and Hosting