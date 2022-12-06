import React from 'react'
// import Auth from '../utils/auth';

// import Header from '../components/Header';
// import Banner from '../components/Banner';
// import SignInModal from '../components/SignInModal';
// import NewAccountModal from '../components/NewAccountModal';
import Footer from '../components/Footer';
import PlatformDropdown from '../components/PlatformDropdown';

export default function SignInPage() {
  return (

    <React.Fragment>

        <div id="container-div">


            <div id="addFriend-contentDiv">

                <div class="signin-centerDiv">

                    {/* <!-- ADD FRIEND HEADER --> */}
                    <div id="addFriend-header">

                        <h3>Sign into Existing Account</h3>

                    </div>



                    <div id="addFriend-form">

                        <div id="addFriend-form-contentDiv">

                            <div class="row">
                                <form class="col s12">
                                    <div class="row">

                                        <div class="input-field col s12">

                                            <div class="linkToOtherModal-div">

                                                <p>No account yet?</p> 
                                                <a class="modal-trigger modal-close" href="/NewAccount">Click here to Create an Account</a>
                                                </div>

                                            </div>



                                            <div class="input-field col s12">

                                                <form class="col s12">
                                                    <div class="row">
                                                        <div class="input-field col s12">
                                                            <img class="material-icons prefix" src="../img/icons/noun-user-4869878--dkPurple.png" alt="user icon" />
                                                            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                                                            <label for="icon_prefix2">Username</label>
                                                        </div>
                                        
                                                        <div class="input-field col s12">
                                                            <img class="material-icons prefix" src="../img/icons/noun-lock-4969686--dkPurple.png" alt="lock and key icon" />
                                                            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                                                            <label for="icon_prefix2">Password</label>
                                                        </div>
                                        
                                                    </div>
                                                </form>
                                            </div>

                                        <PlatformDropdown />

                                    </div>

                                </form>

                            </div>

                        </div>

                        <div class="modal-footer">
                            <div class="modal-footer-linksDiv">
                                <a href="/" class="modal-close waves-effect btn-flat modal-footer-cancel">CANCEL</a>
                                <a href="/FriendlistHome" class="modal-close waves-effect btn-flat">Sign In</a>
                            </div>
                        </div>

                    </div>


                </div>


            </div>


        </div>


    </React.Fragment>

  )

}

// TO DO: 
// convert to modal