import { connect } from 'react-redux';
import { plus, minus, multiply, divide, number1, number2, number3, number4, number5, number6, number7, number8, number9, number0 } from '../modules/calcAction';
import calcResult from '../components/calcResult';

function mapStateToProps(state) {
  return {
    num: state.calc.num,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    plus: () => dispatch(plus()),
    minus: () => dispatch(minus()),
    multiply: () => dispatch(multiply()),
    divide: () => dispatch(divide()),
    number1: () => dispatch(number1()),
    number2: () => dispatch(number2()),
    number3: () => dispatch(number3()),
    number4: () => dispatch(number4()),
    number5: () => dispatch(number5()),
    number6: () => dispatch(number6()),
    number7: () => dispatch(number7()),
    number8: () => dispatch(number8()),
    number9: () => dispatch(number9()),
    number0: () => dispatch(number0())

 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(calcResult);