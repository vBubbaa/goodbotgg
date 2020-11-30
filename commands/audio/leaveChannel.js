/**
 * Description: Leaves a channel of the message sender.
 * Usage: !leave
 */

const { VoiceChannel } = require('discord.js');
const leave = require('../../util/audio/leaveChannel');

module.exports = {
  name: 'leave',
  description: 'Joins a discord channel',
  execute(message) {
    message.member.voice.channel.leave();
  },
};
