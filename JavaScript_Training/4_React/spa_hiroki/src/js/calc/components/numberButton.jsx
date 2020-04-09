import React from "react";

class numberButton extends React.Component {
  render() {
    return (
      <button onClick={() => {this.props.plus(this.props.num)}}>
        {this.props.num}
      </button>
    );
  }
}

export default numberButton;
