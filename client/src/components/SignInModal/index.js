import React from 'react';

const SignInModal = () => {

  return (

    <div id="sign-in-modal" class="modal">

        <div class="modal-content">
            <h4>Sign into Existing Account</h4>

            <div class="linkToOtherModal-div">

                <p>No account yet?</p> 

                <a class="modal-trigger modal-close" href="#account-creation-modal">Click here to Create an Account</a>

            </div>

            <div class="row">

                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">

                            <img class="material-icons prefix" src="/client/public/img/icons/noun-user-4869878--dkPurple.png" alt="user icon" />

                            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>

                            <label for="icon_prefix2">Username</label>

                        </div>

                        <div class="input-field col s12">

                            <img class="material-icons prefix" src="/client/public/img/icons/noun-lock-4969686--dkPurple.png" alt="lock and key icon" />

                            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>

                            <label for="icon_prefix2">Password</label>
                            
                        </div>

                    </div>
                </form>

            </div>

        </div>

        <div class="modal-footer">

            <div class="modal-footer-linksDiv">

                <a href="#!" class="modal-close waves-effect btn-flat modal-footer-cancel">CANCEL</a>

                <a href="#!" class="modal-close waves-effect btn-flat">Sign In</a>
                
            </div>

        </div>

    </div>

  );

};

export default SignInModal;