import React from 'react';

class calcButton extends React.Component {
    render() {
        if (this.props.param === "+") {
            return (
                <button onClick={() => this.props.plus(this.props.param)}>{this.props.param}</button>);
        } else if (this.props.param === "-") {
            return (
                <button onClick={() => this.props.minus(this.props.param)}> {this.props.param} </button>
            );
        } else if (this.props.param === "×") {
            return (
                <button onClick={() => this.props.multiply(this.props.param)}> {this.props.param} </button>);
        }
        return (<button onClick={() => this.props.divide(this.props.param)}> {this.props.param} </button>);
    }
}

export default calcButton;
