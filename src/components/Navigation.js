import React, { Component } from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from '@reach/router';

class Navigation extends Component {
  render() {
    const { user, logOutUser } = this.props;

    return (
      <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
        <div className="container-fluid">
          <Link to="/Home" className="navbar-brand">
            <FaUsers className="mr-1" /> Home Page
          </Link>
          <div className="navbar-nav ml-auto">
          <Link className="nav-item nav-link" to="/Home">
              Home Page
              </Link>
          <Link className="nav-item nav-link" to="/Counters">
                Counters
              </Link>
              <Link className="nav-item nav-link" to="/Api">
                Call Apis
              </Link>
              <Link className="nav-item nav-link" to="/ContactManager">
              Contact Manager
              </Link>
</div>

          <div className="navbar-nav ml-auto">
            {!user && (
              <Link className="nav-item nav-link" to="/login">
                log in
              </Link>
            )}
            {!user && (
              <Link className="nav-item nav-link" to="/register">
                register
              </Link>
            )}
            {user && (
              <Link
                className="nav-item nav-link"
                to="/login"
                onClick={e => logOutUser(e)}
              >
                log out
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
