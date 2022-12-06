const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    realName: String
    email: String
    password: String
    friends: [Friend]!
  }
  type Friend {
    _id: ID
    platform: String
    gamerName: String
    irl: Boolean
    notes: String
    createdAt: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(username: String!): User
    friends(username: String): [Friend]
    friend(friendId: ID!): Friend
    me: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFriend(platform: String!, gameName: String!, irl: Boolean, notes: String): Friend
    removeFriend(friendId: ID!): Friend
  }
`;

module.exports = typeDefs;
