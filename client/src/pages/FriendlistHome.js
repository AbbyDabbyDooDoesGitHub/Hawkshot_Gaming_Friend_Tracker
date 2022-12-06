import React from 'react'
import Auth from '../utils/auth';

// import Header from '../components/Header';
// import Banner from '../components/Banner';
// import SignInModal from '../components/SignInModal';
// import NewAccountModal from '../components/NewAccountModal';
import Footer from '../components/Footer';
import PlatformDropdown from '../components/PlatformDropdown';

export default function FriendlistHome() {
  return (

    <React.Fragment>


        <div id="friendlist-div">

            <div id="friendlist-content-div">

                <div id="friendlist-left-div">

                    <div id="friendlist-header-left">

                        <h3>
                            My Achievements
                        </h3>

                    </div>

                    <div class="center" id="friendlist-header-inside-left">

                        <p id="friendlist-header-label-left">
                            Earn Achievements as you Use Hawkshot
                        </p>

                    </div>







                    <div class="friendlist-achievement">
                        
                        <img class="friendlist-achievement-icon" src="../img/hawkshot-logos/HawkshotLogo-BowOnly-LightBackground.png"/>

                        <div class="friendlist-achievement-textDiv">

                            <h4 class="friendlist-achievement-title">
                            Budding Socialite
                            </h4>

                            <h5 class="friendlist-achievement-subtitle">
                            Added 5 Friends
                            </h5>

                        </div>

                    </div>


                    <div class="friendlist-achievement">

                        <img class="friendlist-achievement-icon" src="../img/hawkshot-logos/HawkshotLogo-BowOnly-LightBackground.png"/>

                        <div class="friendlist-achievement-textDiv">

                            <h4 class="friendlist-achievement-title">
                            Novice Author
                            </h4>

                            <h5 class="friendlist-achievement-subtitle">
                            Notes longer than 100 characters on 3+ friends
                            </h5>

                        </div>

                    </div>







                </div>



                <div id="friendlist-right-div">

                    <div id="friendlist-header">

                        <h3>
                            My Friends
                        </h3>

                        <div id="friendlist-header-inside">

                            <div class="input-field col s12">
                    
                                <img class="addFriend-prefixIcons" id="friendlist-header-icon" src="../img/icons/noun-user-4869878--dkPurple.png" alt="user icon" />
                    
                                <label class="addFriend-mainText" id="friendlist-header-label">

                                    Currently viewing friends on
                                    
                                    <a class='dropdown-trigger selectedDropdown' id="friendlist-header-dropdown" href='#' data-target='addFriend-platformDropdown'>
                                        Default Platform
                                    </a>

                                </label>

                            </div>

                            <PlatformDropdown />

                            <a class="btn" id="friendlist-header-addNew" href='AddFriend'>
                            ADD NEW FRIEND
                            </a>

                        </div>

                    </div>

                







                    <div class="friendlist-friend">

                        <img class="friendlist-friend-icon" src="../img/hawkshot-logos/HawkshotLogo-BowOnly-LightBackground.png"/>

                        <div class="friendlist-friend-textDiv">
                    
                            <h4 class="friendlist-friend-name center">
                                Hovot
                            </h4>

                            <h5 class="friendlist-friend-platform center">
                                League of Legends
                            </h5>
                        </div>

                        <p class="friendlist-friend-notes">
                            Glenn IRL - Fun to play with, but doesn't play often - good pick for jungle, but is much better than you so it doesn't really matter what position he plays - can sometimes get him to clash
                        </p>

                    </div>




                    <div class="friendlist-friend">

                        <img class="friendlist-friend-icon" src="../img/hawkshot-logos/HawkshotLogo-BowOnly-LightBackground.png"/>

                        <div class="friendlist-friend-textDiv">
                    
                            <h4 class="friendlist-friend-name center">
                                RealBrotherJay
                            </h4>

                            <h5 class="friendlist-friend-platform center">
                                League of Legends
                            </h5>
                        </div>

                        <p class="friendlist-friend-notes">
                            Friended this person because I jokingly said "it's good to see you, Jay!" despite never having talked to him before and he just went along with it as if we'd known each other forever - Fun to play with, and is basically always on - mains jungle, but also plays ADC - good ranked duo or mess around pick because he doesn't take things too seriously
                        </p>

                    </div>







                </div>

            </div>

        </div>


    </React.Fragment>

  )

}


// TO DO: 
// Remove static examples and insert dynamic components
// make "default platform" for dropdown change to the selected platform