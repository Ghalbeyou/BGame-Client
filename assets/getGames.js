const ini = require('ini');
const axios = require('axios')

const readGamesIniFile = async () => {
  let url = "https://raw.githubusercontent.com/Ghalbeyou/bgames-db/main/Games.ini" + "?timestamp=" + Date.now();
  try {
    const response = await axios.get(url);
    const data = response.data;
    return ini.parse(data);
  } catch (error) {
    console.log('Error reading Games.ini file:', error);
  }
};

exports.get = async function(gname) {
  try {
    const games = await readGamesIniFile();
    console.log(games);
    if (games) {
      return games[gname];
    } else {
      console.log('Failed to read Games.ini file.');
      return {no: 1}
    }
  } catch (error) {
    console.log('Error:', error);
  }
}
