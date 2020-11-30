async function joinChannel(message) {
  const connection = await message.member.voice.channel.join();
  return connection;
}

module.exports = joinChannel;
