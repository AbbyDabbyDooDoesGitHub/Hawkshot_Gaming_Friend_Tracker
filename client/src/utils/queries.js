import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      realName
      email
      friends {
        _id
        platform
        gamerName
        irl
        notes
        createdAt
      }
    }
  }
`;

export const QUERY_FRIENDS = gql`
  query getFriends($username: String!) {
    user(username: $username){
      friends {
        _id
        platform
        gamerName
        irl
        notes
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_FRIEND = gql`
  query getSingleFriend($friendId: ID!) {
    account(friendId: $friendId) {
      _id
        platform
        gamerName
        irl
        notes
        createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      realName
      email
      friends {
        _id
        platform
        gamerName
        irl
        notes
        createdAt
      }
    }
  }
`;
