import React from 'react';

class minusButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.minus}>-</button>
        );
    }
}

export default minusButton;
