import React from "react";

class PlusButton extends React.Component {
  render() {
    return <button onClick={this.props.plus} >+</button>;
  }
}

export default PlusButton;
