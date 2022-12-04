import React from 'react'
// import Auth from '../utils/auth';

// import Header from '../components/Header';
// import Banner from '../components/Banner';
// import SignInModal from '../components/SignInModal';
// import NewAccountModal from '../components/NewAccountModal';
import Footer from '../components/Footer';
// import PlatformDropdown from '../components/PlatformDropdown';

export default function MeetDevs() {

  return (

    <React.Fragment>


        <div id="container-div">

            <div id="all-non-footer-content-div">

                {/* <Header />

                <Banner />

                <SignInModal />

                <NewAccountModal /> */}



                <div class="meetDevs-div">

                    <h3 class="dev-header">Meet the Devs</h3>

                    <div class="dev-div dev-div-trnsp">

                        <p class="dev-text dev-text-lastP">
                            This application was developed as a final project after a 6 month coding bootcamp through the University of Washington in 2022. Links for the individual developer GitHub and LinkedIn profiles can be found below.
                        </p>

                    </div>

                    <div class="dev-div center">

                        <h4>Abigail Douglas</h4>

                        <p class="dev-text dev-text-lastP">
                            <a target="_blank" rel="noreferrer" href="https://github.com/AbbyDabbyDooDoesGitHub">GitHub</a>
                            - 
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abigailcdouglas/">LinkedIn</a>
                        </p>

                    </div>

                    <div class="dev-div center">

                        <h4>Andrew Cha</h4>

                        <p class="dev-text dev-text-lastP">
                            <a target="_blank" rel="noreferrer" href="https://github.com/Jinnywoo">GitHub</a>
                            - 
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/andrew-cha-7b728323a/">LinkedIn</a>
                        </p>

                    </div>

                    <div class="dev-div center">

                        <h4>Gwanju Chung</h4>

                        <p class="dev-text dev-text-lastP">
                            <a target="_blank" rel="noreferrer" href="https://github.com/thegwanj">GitHub</a>
                            - 
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gwanju-chung/">LinkedIn</a>
                        </p>

                    </div>

                    <div class="dev-div center">

                        <h4>Sara Teshome</h4>

                        <p class="dev-text dev-text-lastP">
                            <a target="_blank" rel="noreferrer" href="https://github.com/teshome28sara">GitHub</a>
                            - 
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sara-w-teshome/">LinkedIn</a>
                        </p>

                    </div>

                </div>



                <div class="meetDevs-div">

                    <h3 class="dev-header">Origin of the Name</h3>

                    <div class="dev-div dev-div-trnsp">

                        <p class="dev-text">
                            While we have ambitions of expanding this application to serve multiple platforms, the initial inspiration was to bring clarity to friendlists in League of Legends. As homage to this, we landed on the name "Hawkshot" for our app. 
                        </p>

                        <p class="dev-text">
                            As of the time this app was created, League of Legends has an impressive 162 champions for players to take to battle, but upon release there were just 17. One of these original champions, Ashe, has an unusual "E" ability entirely built for utility. Instead of damaging opponents or healing allies, Ashe uses her hawkshot ability to send a hawk to provide vision in a targeted area. 
                        </p>

                        <p class="dev-text dev-text-lastP">
                            Our goal was to bring more clarity to your friendslist, so after sifting through names calling back to warding trinkets and vision scores, we landed on Hawkshot as a satisfying nod to the project.
                        </p>

                    </div>

                </div>



                <div class="meetDevs-div">

                    <h3 class="dev-header">Additional Attributions</h3>

                    <div class="dev-div dev-div-trnsp dev-text-lastP">

                        <p class="dev-text center">

                            See the README.md in our 
                            <a target="_blank" rel="noreferrer" href="https://github.com/AbbyDabbyDooDoesGitHub/UW_Project3_LeagueOfLegendsFriendTracker">GitHub repository</a>
                            for complete attributions for this project.

                        </p>

                    </div>

                </div>

                <Footer />


            </div>



        </div>


    </React.Fragment>

  )

}

// 
