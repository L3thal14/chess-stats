const API_URL = "https://api.chess.com/pub";
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const sendRequest = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`);
    return await response.json();
  } catch (e) {
    console.error(`Error for ${endpoint}`, e);

    throw e;
  }
};
const sortedGames = (games) => {
  const sortedGames = games.sort((a, b) => a.end_time - b.end_time);
  const firstDate =
    sortedGames[0] == null
      ? new Date(0)
      : new Date(sortedGames[0].end_time * 1000);
  const latestDate =
    sortedGames[sortedGames.length - 1] == null
      ? new Date(0)
      : new Date(sortedGames[sortedGames.length - 1].end_time * 1000);
  const firstGameDate = firstDate.getDate();
  const firstGameMonth = months[firstDate.getMonth()];
  const firstGameYear = firstDate.getFullYear();
  const latestGameDate = latestDate.getDate();
  const latestGameMonth = months[latestDate.getMonth()];
  const latestGameYear = latestDate.getFullYear();
  var firstGame = `${firstGameDate} ${firstGameMonth} ${firstGameYear}`;
  var lastGame = `${latestGameDate} ${latestGameMonth} ${latestGameYear}`;
  console.log(firstGame, lastGame);
};
const getFirstMoveString = (games, username, color) => {
  const colorGames = games.filter(
    (g) => g[color].username.toLowerCase() === username.toLowerCase()
  );

  const firstMoves = colorGames.map((g) => {
    const regex = color === "white" ? /1\. (.+?) / : /1\.\.\. (.+?) /;
    const match = g.pgn.match(regex);
    if (match == null) {
      return "(none)";
    }

    return match[1];
  });
  var freq = 1;
  var m = 0;
  var move;
  for (var i = 0; i < firstMoves.length; i++) {
    for (var j = i; j < firstMoves.length; j++) {
      if (firstMoves[i] === firstMoves[j]) m++;
      if (freq < m) {
        freq = m;
        move = firstMoves[i];
      }
    }
    m = 0;
  }
  var Percentage = freq / firstMoves.length;
  return `${move} (${Math.round(Percentage * 100)}%)`;
};

export const getGames = async (username) => {
  const response = await sendRequest(`/player/${username}/games/archives`);
  const endpoints = response.archives
    .map((url) => url.replace(API_URL, ""))
    .reverse();

  let games = [];
  for (let i = 0; i < endpoints.length; i++) {
    const endpoint = endpoints[i];
    const gamesResponse = await sendRequest(endpoint);
    games = [...games, ...gamesResponse.games];
  }
  sortedGames(games);
  return games;
};
