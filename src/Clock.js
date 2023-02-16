import React from 'react';

export default class Clock extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = { now: new Date() };
    this.updateTime = this.updateTime.bind(this);
  }

  updateTime(event) {
    this.setState({ now: new Date() });
  }

  render() {
    return (
      <div>
        <h1>It is currently {this.state.now.toLocaleTimeString()}</h1>
        <h2>{this.props.subtitle}</h2>
        <button onClick={this.updateTime}>Update the clock</button>
      </div>
    );
  }
}
