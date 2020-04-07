import { connect } from 'react-redux';
import { minus } from '../modules/calcAction';
import minusButton from '../components/minusButton';


function mapStateToProps() {
  return {};
}

function mapDispatchToProps2(dispatch2) {
  return {
    minus: () => dispatch2(minus()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps2)(minusButton);