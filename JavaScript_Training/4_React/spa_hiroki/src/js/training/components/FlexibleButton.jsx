import React from 'react';

class FlexibleButton extends React.Component {
    render() {
        console.log('=============');
        console.log(this);
        console.log('=============');
        console.log(this.props);
        return(
            <button style={{width:this.props.width,height:'100px',backgroundColor:'red'}}>
              test
            </button>
            
        );
     }
    }
export default FlexibleButton;