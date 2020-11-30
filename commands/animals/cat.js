/**
 * Description: Sends a messageembed of a cute cat.
 * Usage: !cat
 * @return {Discord.MessageEmbed} An embedded message with a very cute cat.
 */

const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
  name: 'cat',
  description: 'Cat.',
  execute(message) {
    axios
      .get('https://api.thecatapi.com/v1/images/search?limit=1')
      .then((response) => {
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Cute cat.')
            .setImage(response.data[0].url)
        );
      });
  },
};
