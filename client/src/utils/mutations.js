import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $realName: String, $email: String!, $password: String!) {
    addUser(username: $username, realName: $realName, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addAccount($platform: String!, $gamerName: String!, $irl: Boolean!, $notes: String) {
    addAccount(platform: $platform, gamerName: $gamerName, irl: $irl, notes: $notes) {
      _id
      platform
      gamerName
      irl
      notes
      createdAt
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($friendId: ID!) {
    removeFriend(friendId: $friendId) {
      _id
      platform
      gamerName
      irl
      notes
    }
  }
`
;