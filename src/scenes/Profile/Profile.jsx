import { connect } from 'react-redux';
import ProfileMain from './components/pg.ProfileMain';


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    isLoading: state.user.isLoading
  };
};

export default connect(mapStateToProps, null)(ProfileMain);
