const db = require('../config/connection');
const { User, Friend } = require('../models');
const userSeeds = require('./userSeeds.json');
const friendSeeds = require('./friendSeeds.json');

db.once('open', async () => {
  try {
    await Friend.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Friend.create(friendSeeds)

    // TODO: Update to include all values for friends
    for (let i = 0; i < friendSeeds.length; i++) {
      const { _id, gamerName } = await Friend.create(friendSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: gamerName },
        {
          $addToSet: {
            friends: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
