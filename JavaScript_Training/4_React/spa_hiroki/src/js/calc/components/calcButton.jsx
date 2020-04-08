import React from 'react';

class calcButton extends React.Component {
    render() {
        if (this.props.param === "+") {

            return (
                <button onClick={this.props.plus}>{this.props.param}</button>);
        }
        return (
            <button onClick={this.props.minus}> {this.props.param} </button>
        );
    }
}

export default calcButton;
