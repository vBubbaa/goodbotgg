/**
 * Description: Joins a channel of the message sender.
 * Usage: !join
 */

const join = require('../../util/audio/joinChannel');

module.exports = {
  name: 'join',
  description: 'Joins a discord channel',
  execute(message) {
    join(message);
  },
};
