import { connect } from 'react-redux';
import calcResult from '../components/calcResult';

function mapStateToProps(state) {
  return {
    num: state.calc.num,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(calcResult);
