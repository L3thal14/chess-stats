import { sendRequest } from "./sendrequest";
const API_URL = "https://api.chess.com/pub";

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
  return games;
};
