/**
 * Description: Merry christmas in voice chat.
 * Usage: !christmas
 */

const ytdl = require('ytdl-core');

module.exports = {
  name: 'christmas',
  description: 'Plays a classic christmas audio clip',
  // Async function so we can join the voice channel
  async execute(message) {
    // Make sure the command sender is in a channel to join
    if (message.member.voice.channel) {
      // Create the connection and join the channel
      const connection = await message.member.voice.channel.join();
      // Stream obj with ytdl to play youtube videos (audio only)
      const stream = ytdl('https://www.youtube.com/watch?v=kc6o0aso9KQ', {
        filter: 'audioonly',
      });
      // dispatcher obj, play the stream obj at .3 volume
      const dispatcher = connection.play(stream, {
        volume: 0.3,
      });

      // On finish destroy the dispatcher and leave the channel
      dispatcher.on('finish', () => {
        dispatcher.destroy();
        message.member.voice.channel.leave();
      });
    }
    // Command message sender is not in a discord channel, send err message
    else {
      message.channel.send('You need to be in a channel for me to join!');
    }
  },
};
