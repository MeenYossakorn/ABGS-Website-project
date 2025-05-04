const config = require('../config.json');
const axios = require('axios');

async function CheckverifyPassword(email, password) {
    const apiKey = config.WebAPIkey;
    console.log('Login success: test'+apiKey);
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
    console.log('Login success: asdasd  '+url);

    try {
      const response = await axios.post(url, {
        email,
        password,
        returnSecureToken: true,
      });
      return true;
    } catch (error) {
      console.log('Login success: test'+ error);
      return false;
    }
  }

  module.exports = CheckverifyPassword; 