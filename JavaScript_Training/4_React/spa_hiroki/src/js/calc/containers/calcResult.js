import { connect } from 'react-redux';
import { plus, minus, multiply, divide } from '../modules/calcAction';
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
    divide: () => dispatch(divide())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(calcResult);