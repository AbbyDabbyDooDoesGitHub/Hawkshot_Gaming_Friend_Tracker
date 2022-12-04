import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (

    <header>
      <nav>
        <div id="navBar-div">

          <ul class="left" id="navBar-titleDiv">

            <Link to="/">
              <li><img id="navBar-logo" src="../img/hawkshot-logos/HawkshotLogo-FULL-NoBackground.png" alt="Hawkshot Logo"/></li>

              <li><h1 id="navBar-subtitle">Reveal Your Friendlist</h1></li>
            </Link>

          </ul>


          <ul class="right" id="navBar-linksDiv">

            {Auth.loggedIn() ? (
              <>

                <li><a class="nav-a" href="/">Home</a></li>

                <li> <a class="nav-a" href="/FriendlistHome">My Friends</a></li>

                <li><a class="nav-a" href="/MeetDevs">Meet the Devs</a></li>

                <li><button class="btn navBtn" id="navBar-signOut" onClick={logout}>Sign Out</button></li>

              </>
            ) : (
              <>

                <li><a class="nav-a" href="/">Home</a></li>

                <li><a class="nav-a" href="/MeetDevs">Meet the Devs</a></li>

                <li><a class="nav-a" href="/NewAccount">Create Account</a></li>

                <li><a class="btn navBtn" id="navBar-signIn" href="/SignIn">Sign In</a></li>

              </>
            )}

          </ul>
            
        </div>

      </nav>

    </header>

  );
  
};

export default Header;


// TO DO
// get sign ins and account creations swapped to modals

// <li><a class="nav-a modal-trigger" href="#account-creation-modal">Create Account</a></li>
// <li><button class="btn navBtn modal-trigger" id="navBar-signIn" href="#sign-in-modal">Sign In</button></li> 