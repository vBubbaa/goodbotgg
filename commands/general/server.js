/**
 * Description: Sends a message with the channel member count.
 * Usage: !server
 */

module.exports = {
  name: 'server',
  description: 'Display info about this server.',
  execute(message) {
    message.channel.send(
      `Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`
    );
  },
};
