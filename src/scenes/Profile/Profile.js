import { connect } from 'react-redux';
import ProfileMain from './components/org.ProfileMain';


const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    isLoading: state.profile.isLoading
  };
};

export default connect(mapStateToProps, null)(ProfileMain);
