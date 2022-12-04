import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      accounts {
        _id
        gamerName
        gameNote
        createdAt
      }
    }
  }
`;

export const QUERY_ACCOUNTS = gql`
  query getAccounts {
    accounts {
      _id
      
      gamerName
      gameNote
      createdAt
      friends {
        _id
        
        friendName
        friendNote
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_ACCOUNT = gql`
  query getSingleAccount($accountId: ID!) {
    account(accountId: $accountId) {
      _id
      
      gamerName
      gameNote
      createdAt
      friends {
        _id
        
        friendName
        friendNote
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      accounts {
        _id
        
        gamerName
        gameNote
        createdAt
      }
    }
  }
`;
