import { connect } from 'react-redux';
import ProfileMain from './components/org.ProfileMain';


const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    isLoading: state.users.isLoading
  };
};

export default connect(mapStateToProps, null)(ProfileMain);
