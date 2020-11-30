const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');

// create a new Discord client
const client = new Discord.Client();
client.commands = new Discord.Collection();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
  console.log('Ready!');
});

// Get all command files
const commandFiles = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith('.js'));

// Import each command file
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// Catch channels messages and execute command dynamically, accordingly
client.on('message', (message) => {
  // If the message doesn't have the correct prefix, or if the bot is the messag author
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  //   Get args
  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  //   Get cmd
  const command = args.shift().toLowerCase();

  //   If command specified doesn't exist break
  if (!client.commands.has(command)) return;

  try {
    //   Exe command
    client.commands.get(command).execute(message, args);
  } catch (error) {
    //   Oopsies
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});

// login to Discord with your app's token
client.login(config.token);
