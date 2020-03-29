import React from 'react';

class DifficultButton extends React.Component {
    render() {
      
        return(
            <button style={{width:this.props.width,height:'100px',backgroundColor:this.props.backgroundColor}}>
              {this.props.param}
            </button>
            
        );
     }
    }
export default DifficultButton;