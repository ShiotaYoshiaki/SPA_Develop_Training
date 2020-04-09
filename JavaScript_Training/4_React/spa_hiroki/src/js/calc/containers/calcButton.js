import { connect } from 'react-redux';
import { plus, minus, multiply, divide } from '../modules/calcAction';
import calcButton from '../components/calcButton';

function mapStateToProps() {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    plus: () => dispatch(plus()),
    minus: () => dispatch(minus()),
    multiply: () => dispatch(multiply()),
    divide: () => dispatch(divide())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(calcButton);