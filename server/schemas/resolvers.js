const { AuthenticationError } = require('apollo-server-express');
const { User, Friend } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('friends');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('friends');
    },
    friends: async (parent, { gamerName }) => {
      const params = gamerName ? { gamerName } : {};
      return Friend.find(params).sort({ createdAt: -1 });
    },
    friend: async (parent, { friendId }) => {
      return Friend.findOne({ _id: friendId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('friends');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addAccount: async (parent, { gamerName, gameNote }, context) => {
      if (context.user) {
        const account = await Account.create({
          gamerName,
          gameNote,
          
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { accounts: account._id } }
        );

        return account;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addFriend: async (parent, { accountId, friendName, friendNote }, context) => {
      if (context.user) {
        return Account.findOneAndUpdate(
          { _id: accountId },
          {
            $addToSet: {
              friends: {  username: context.user.username,  friendName, friendNote },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeAccount: async (parent, { accountId }, context) => {
      if (context.user) {
        const account = await Account.findOneAndDelete({
          _id: accountId,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { accounts: account._id } }
        );

        return account;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeFriend: async (parent, { accountId, friendId }, context) => {
      if (context.user) {
        return Account.findOneAndUpdate(
          { _id: accountId },
          {
            $pull: {
              friends: {friendId
                // _id: friendId,
                // username: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
