import React from 'react';

class plusButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.plus}>+</button>
        );
    }
}

export default plusButton;