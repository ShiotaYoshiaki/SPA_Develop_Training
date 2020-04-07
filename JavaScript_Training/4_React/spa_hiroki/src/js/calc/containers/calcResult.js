import { connect } from 'react-redux';
import { plus } from '../modules/calcAction';
import { minus } from '../modules/calcAction';
import calcResult from '../components/calcResult';


function mapStateToProps(state) {
  return {
    num: state.calc.num,
  };
  
}

function mapDispatchToProps(dispatch) {
  return {
    plus: () => dispatch(plus()),
  };
}

function mapDispatchToProps2(dispatch2) {
  return {
    minus: () => dispatch2(minus()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mapDispatchToProps2)(calcResult);