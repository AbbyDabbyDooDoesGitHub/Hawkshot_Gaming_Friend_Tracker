import React from 'react';
import { Link } from 'react-router-dom';
import proLogo from '../../img/proLogo.png';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-secondary text-dark mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        {/* <img src={proLogo} className='proLogo' width='200px' hight='200px'/> */}
        <div>
          <Link className="text-light" to="/">
          <img src={proLogo} className='proLogo' alt="" width='200px' hight='200px'/>
            <h1 className="m-0">Hawkshot</h1>
          </Link>
          <p className="m-0">💕Create a gamer's contact list💕</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-dark m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
        </div>
      
    </header>
  );
};

export default Header;
