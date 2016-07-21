import { connect } from 'react-redux';
import ProfileMain from './components/org.ProfileMain';


const mapStateToProps = (state, ownProps) => {
  return {
    account: state.account,
    isLoading: state.account.isLoading
  };
};

export default connect(mapStateToProps, null)(ProfileMain);
