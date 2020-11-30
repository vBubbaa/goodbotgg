/**
 * Description: Leaves a channel of the message sender.
 * Usage: !leave
 */

module.exports = {
  name: 'leave',
  description: 'Joins a discord channel',
  execute(message) {
    message.member.voice.channel.leave();
  },
};
