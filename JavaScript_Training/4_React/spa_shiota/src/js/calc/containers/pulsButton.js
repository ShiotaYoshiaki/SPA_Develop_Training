import { connect } from 'react-redux';
import { plus } from '../modules/calcAction';
import PlusButton from '../components/plusButton';


function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    plus: () => dispatch(plus()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlusButton);
