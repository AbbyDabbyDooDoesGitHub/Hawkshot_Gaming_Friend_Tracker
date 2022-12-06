import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import pages
import AddFriend from './pages/AddFriend';
import FriendlistHome from './pages/FriendlistHome';
import Home from './pages/Home';
import MeetDevs from './pages/MeetDevs';
import NewAccountPage from './pages/NewAccountPage';
import SignInPage from './pages/SignInPage';

// import components
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
// import NewAccountModal from './components/NewAccountModal';
// import PlatformDropdown from './components/PlatformDropdown';
// import SignInModal from './components/SignInModal';

// import mutations
import { ADD_ACCOUNT } from './utils/mutations';



// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (

    <ApolloProvider client={client}>

      <Router>

        <div id="allButFooter-div">
          
          <Header />

          <Banner /> 
            
            <Routes>
              <Route 
                path="/AddFriend"
                element={<AddFriend />}
              />
              <Route 
                path="/FriendlistHome" 
                element={<FriendlistHome />}
              />
              <Route 
                path="/" 
                element={<Home />}
              />
              <Route 
                path="/MeetDevs" 
                element={<MeetDevs />}
              />
              <Route 
                path="/SignIn" 
                element={<SignInPage />}
              />
              <Route 
                path="/NewAccount" 
                element={<NewAccountPage />}
              />
          
            </Routes>

        </div>


        <Footer />


      </Router>

    </ApolloProvider>
    

  );

}

export default App;
