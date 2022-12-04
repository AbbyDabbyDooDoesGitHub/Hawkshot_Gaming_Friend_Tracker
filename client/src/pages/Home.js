import React from 'react'
import Auth from '../utils/auth';

// import Header from '../components/Header';
// import Banner from '../components/Banner';
// import SignInModal from '../components/SignInModal';
// import NewAccountModal from '../components/NewAccountModal';
import Footer from '../components/Footer';
// import PlatformDropdown from '../components/PlatformDropdown';

export default function Home() {

  return (

    <React.Fragment>

        <div id="container-div">

            <div id="all-non-footer-content-div">

                {/* <Header />

                <Banner />

                <SignInModal />

                <NewAccountModal /> */}



                <div id="aboutUs-div">
                    
                    <div id="aboutUs-div-content">

                        <div id="aboutUs-infoGraphics-heading">

                            <h3 id="aboutUs-infoGraphic-headingText">What is Hawkshot?</h3>

                        </div>

                        <div class="aboutUs-infoGraphics">

                            <img class="aboutUs-infoGraphicImgs" src="../img/backgrounds/about-icon-layouts_2.png" alt="Banner image" />

                            <div class="aboutUs-infoGraphicText-div">

                                <p class="aboutUs-infoGraphicText">Have you ever logged in to play a game and realized you have no idea who's in your friendslist?</p>

                            </div>

                        </div>

                        <div class="aboutUs-infoGraphics">

                            <img class="aboutUs-infoGraphicImgs" src="../img/backgrounds/about-icon-layouts_3.png" alt="Banner image" />

                            <div class="aboutUs-infoGraphicText-div">

                                <p class="aboutUs-infoGraphicText">Maybe you took a chance and accepted an invite from a random player you'd friended, just to realize that even in a low-stakes game mode they can't keep a level head?</p>

                            </div>

                        </div>

                        <div class="aboutUs-infoGraphics">

                            <img class="aboutUs-infoGraphicImgs" src="../img/backgrounds/about-icon-layouts_4.png" alt="Banner image" />

                            <div class="aboutUs-infoGraphicText-div">

                                <p class="aboutUs-infoGraphicText">This is where Hawkshot comes in! Add friends to your Hawkshot friendslist with notes, alternate names, and connected accounts.</p>

                            </div>

                        </div>

                        <div class="aboutUs-infoGraphics">
                            
                            <img class="aboutUs-infoGraphicImgs" src="../img/backgrounds/about-icon-layouts_6.png" alt="Banner image" />

                            <div class="aboutUs-infoGraphicText-div">

                                <p class="aboutUs-infoGraphicText">Friended someone because of a joke they made? Note it! Someone carried a game and miraculously accepted your friend request? Note it! Never wonder why you friended someone again.</p>

                            </div>

                        </div>

                        <div class="aboutUs-infoGraphics">

                            <img class="aboutUs-infoGraphicImgs" src="../img/backgrounds/about-icon-layouts_5.png" alt="Banner image" />

                            <div class="aboutUs-infoGraphicText-div">

                                <p class="aboutUs-infoGraphicText">Make informed choices about who you'll enjoy playing with for your desired game mode, or search your friendslist for a needed position to fill for multiplayer modes. Use Hawkshot to reveal your friendlist.</p>

                            </div>
                            
                        </div>


                        <div id="aboutUs-infoGraphics-bottomLinks">

                            {Auth.loggedIn() ? (
                                <>

                                    <a href="/MeetDevs">Meet the Devs</a>

                                    <a class="nav-a" href="/FriendlistHome">My Friends</a>

                                </>
                            ) : (
                                <>

                                    <a href="/MeetDevs">Meet the Devs</a>
                                                                        
                                    <a href="/NewAccount">Create Account</a>

                                    <a href="/SignIn">Sign In</a>

                                </>
                            )}

                        </div>

                    </div>

                </div>

            </div>

            <div id="home-Footer">

            <Footer/>

            </div>


        </div>


    </React.Fragment>

  )

}

// <a class="modal-trigger" href="#account-creation-modal">Create Account</a>

// <a class="modal-trigger" href="#sign-in-modal">Sign In</a>
