const axios = require('axios');
const gradient = require('gradient-string');

const username = Math.random().toString(36).substring(2, 8);
const domain = '1secmail.com';
console.log(gradient(['lime', 'cyan'])(`Simple Temporary Tools By Jonell Magallanes :>`));
const email = `${username}@${domain}`;
console.log(gradient(['lime', 'cyan'])(`Temporary Email: ${email}`));

async function fetchMessages() {
  try {
    const response = await axios.get(`https://www.1secmail.com/api/v1/?action=getMessages&login=${username}&domain=${domain}`);
    const messages = response.data;

    if (messages.length > 0) {
      console.clear();
      console.log(gradient(['lime', 'cyan'])(`New messages for ${email}:\n`));

      for (let message of messages) {
        console.log(gradient(['lime', 'cyan'])(`From: ${message.from}`));
        console.log(gradient(['lime', 'cyan'])(`Subject: ${message.subject}`));
        console.log(gradient(['lime', 'cyan'])(`Date: ${message.date}`));
        console.log(gradient(['lime', 'cyan'])(`Message ID: ${message.id}\n`));
      }
    }
  } catch (error) {
    console.error(error.message);
  }
}

setInterval(fetchMessages, 1000);
