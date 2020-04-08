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
    minus: () => dispatch(minus())
  };
}

export default connect(mapStateToProps, mapDispatchToProps )(calcResult);