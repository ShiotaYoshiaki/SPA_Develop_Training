import { connect } from 'react-redux';
import { plus, minus } from '../modules/calcAction';
import calcButton from '../components/calcButton';


function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    plus: () => dispatch(plus()),
    minus: () => dispatch(minus())
  };
  
}

export default connect(mapStateToProps, mapDispatchToProps)(calcButton);