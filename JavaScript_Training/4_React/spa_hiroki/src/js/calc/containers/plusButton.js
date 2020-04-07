import { connect } from 'react-redux';
import { plus } from '../modules/calcAction';
import plusButton from '../components/plusButton';


function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    plus: () => dispatch(plus()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(plusButton);