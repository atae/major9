import React from 'react';
import { Link, withRouter } from "react-router";
import SessionFormContainer from '../session/session_form_container';
import Modal from 'react-modal';
import SearchContainer from './search/search_container';

class Navbar extends React.Component{
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
    this.state = {
      modalOpen: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.onModalClose = this.onModalClose.bind(this)
  }

  handleClick(formType) {
  return e => {
    this.props.receiveFormType(formType);
    this.setState({modalOpen: true});
    }
  }

  onModalClose() {
    this.props.clearErrors([""]);
    this.setState({modalOpen: false});
  }

  handleLogout() {
    this.props.logout();
    this.onModalClose();
  }


  handleLogo() {
    this.props.fetchArtists
  }
// Navbar in the else condition goes in session form, only what a logged out user would seed
// Once logged in, completely replace the sessionform, and show the logged in navbar
// Restrict loggedin navbar with an onEnter
  render () {
    if (this.props.currentUser !== null) {
    return (
      <nav id="loggedIn" className="navbar">
        <ul >
        <Link className="navbar-link" onClick={this.handleLogo.bind(this)}to="/"><li className="logo">
          <img src="https://s3-us-west-1.amazonaws.com/major9/Major9_Logo.png"/></li></Link>
          <SearchContainer />
          <li><h3>{this.props.currentUser.username}!</h3></li>
          <Link className="navbar-link" onClick={this.handleLogout}><li>Logout</li></Link>
        </ul>
      </nav>
    );
  } else {
    return (<nav className="navbar">
      <ul>
        <Link className="navbar-link" onClick={this.handleLogo.bind(this)} to="/" ><li className="logo">
          <img src="https://s3-us-west-1.amazonaws.com/major9/Major9_Logo.png"/></li></Link>
          <SearchContainer />
        <Link onClick={this.handleClick("signup")} className="navbar-link"><li>Sign Up</li></Link>
        <Link onClick={this.handleClick("login")} className="navbar-link"><li>Log In</li></Link>
        <Link onClick={this.props.guestLogin} className="navbar-link"><li>Guest Login</li></Link>

      </ul>
        <Modal
           isOpen={this.state.modalOpen}
           onRequestClose={this.onModalClose.bind(this)}
           style = {{content :{
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)'
              }
            }
          }
          >
          <div className="session-box">
            <button className="session-parts" onClick={this.onModalClose.bind(this)}>Close</button>
            <SessionFormContainer />
          </div>
        </Modal>
    </nav>
    )
  }

  };
};

export default withRouter(Navbar);
