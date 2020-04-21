import React from "react";

class numberButton extends React.Component {
  render() {
    if (this.props.num === 1) {
      return (
        <button onClick={() => this.props.number1(this.props.num)}>{this.props.num}</button>);
    } else if (this.props.num === 2) {
      return (
        <button onClick={() => this.props.number2(this.props.num)}> {this.props.num} </button>);
    } else if (this.props.num === 3) {
      return (
        <button onClick={() => this.props.number3(this.props.num)}> {this.props.num} </button>);
    } else if (this.props.num === 4) {
      return (
        <button onClick={() => this.props.number4(this.props.num)}> {this.props.num} </button>);
    } else if (this.props.num === 5) {
      return (
        <button onClick={() => this.props.number5(this.props.num)}> {this.props.num} </button>);
    } else if (this.props.num === 6) {
      return (
        <button onClick={() => this.props.number6(this.props.num)}> {this.props.num} </button>);
    } else if (this.props.num === 7) {
      return (
        <button onClick={() => this.props.number7(this.props.num)}> {this.props.num} </button>);
    } else if (this.props.num === 8) {
      return (
        <button onClick={() => this.props.number8(this.props.num)}> {this.props.num} </button>);
    } else if (this.props.num === 9) {
      return (
        <button onClick={() => this.props.number9(this.props.num)}> {this.props.num} </button>);
    }
    return (<button onClick={() => this.props.number0(this.props.num)}> {this.props.num} </button>);
  }

}

export default numberButton;

