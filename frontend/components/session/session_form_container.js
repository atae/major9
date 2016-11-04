import { connect } from "react-redux";
import sessionForm from './session_form';
import {signup, login, receiveErrors} from '../../actions/session_actions';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
  loggedIn: (state.session.currentUser !== null ? true : false ),
  errors: state.session.errors,
  currentUser: state.session.currentUser
  }
};



const mapDispatchToProps = (dispatch, ownProps) => ({
  formType: location.hash,
  clearErrors: () => dispatch(receiveErrors([])),
  processForm: (formType, user) => {
    // debugger;
    let userObject = { user : user};
    if (formType === '#/signup') {
      dispatch(signup(userObject));
    } else if (formType === '#/login') {
      dispatch(login(userObject));
    }
  }


});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(sessionForm));
