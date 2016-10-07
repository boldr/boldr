import { connect } from 'react-redux';
import MyProfile from './MyProfile';

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    isLoading: state.profile.isLoading
  };
};

export default connect(mapStateToProps, null)(MyProfile);
