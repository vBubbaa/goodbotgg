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

// Command directory
let cmdDir = fs.readdirSync('./commands');

// Iterate each directory of the command directory
for (let dir of cmdDir) {
  // Get command files for the dir
  let commandFiles = fs
    .readdirSync(`./commands/${dir}`)
    .filter((file) => file.endsWith('.js'));

  // Set each .js file in the dir as a command
  for (let file of commandFiles) {
    let command = require(`./commands/${dir}/${file}`);
    client.commands.set(command.name.toLowerCase(), command);
  }
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
