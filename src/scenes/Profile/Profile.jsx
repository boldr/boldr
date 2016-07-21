import { connect } from 'react-redux';
import ProfileMain from './components/org.ProfileMain';


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    isLoading: state.user.isLoading
  };
};

export default connect(mapStateToProps, null)(ProfileMain);
