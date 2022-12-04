import React from 'react';

const NewAccountModal = () => {

  return (

    <div id="account-creation-modal" class="modal">
        <div class="modal-content">
            <h4>Create a New Account</h4>

            <div class="linkToOtherModal-div">
                <p>Already have an Account?</p> 
                <a class="modal-trigger modal-close" href="#sign-in-modal">Click here to Sign In</a>
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
                            <img class="material-icons prefix" src="/client/public/img/icons/noun-message-4869933--dkPurple.png" alt="email icon" />
                            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                            <label for="icon_prefix2">Email</label>
                        </div>

                        <div class="input-field col s12">
                            <img class="material-icons prefix" src="/client/public/img/icons/noun-lock-4969686--dkPurple.png" alt="lock and key icon" />
                            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                            <label for="icon_prefix2">Password</label>
                        </div>
                        
                        <div class="input-field col s12">
                            <img class="material-icons prefix" src="/client/public/img/icons/noun-lock-4969686--dkPurple.png" alt="lock and key icon" />
                            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                            <label for="icon_prefix2">Re-Enter Password</label>
                        </div>

                    </div>
                </form>
            </div>
        </div>

        <div class="modal-footer">
            <div class="modal-footer-linksDiv">
                <a href="#!" class="modal-close waves-effect btn-flat modal-footer-cancel">CANCEL</a>
                <a href="#!" class="modal-close waves-effect btn-flat">Create Account & Sign In</a>
            </div>
        </div>
    </div>

  );

};

export default NewAccountModal;