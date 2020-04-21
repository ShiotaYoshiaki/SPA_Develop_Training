import { connect } from 'react-redux';
import { plus, minus, multiply, divide, } from '../modules/calcAction';
import calcButton from '../components/calcButton';

function mapStateToProps() {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    plus: (num) => dispatch(plus(num)),
    minus: (num) => dispatch(minus(num)),
    multiply: (num) => dispatch(multiply(num)),
    divide: (num) => dispatch(divide(num)),
   
   
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(calcButton);