
import { connect } from 'react-redux';
import { number1, number2, number3, number4, number5, number6, number7, number8, number9, number0 } from '../modules/calcAction';
import numberButton from '../components/numberButton';

function mapStateToProps() {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
   
    number1: (num) => dispatch(number1(num)),
    number2: (num) => dispatch(number2(num)),
    number3: (num) => dispatch(number3(num)),
    number4: (num) => dispatch(number4(num)),
    number5: (num) => dispatch(number5(num)),
    number6: (num) => dispatch(number6(num)),
    number7: (num) => dispatch(number7(num)),
    number8: (num) => dispatch(number8(num)),
    number9: (num) => dispatch(number9(num)),
    number0: (num) => dispatch(number0(num))


   
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(numberButton);