import React, { Component } from "react";

class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  render() {
    return (
      <div className='card card-body bg-light border output'>
        {this.props.value}
      </div>
    );
  }
}

export default Output;
