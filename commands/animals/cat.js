/**
 * Description: Sends a message with the channel member count.
 * Usage: !cat
 */

module.exports = {
  name: 'cat',
  description: 'Cat.',
  execute(message) {
    message.channel.send(`Kitters.`);
  },
};
