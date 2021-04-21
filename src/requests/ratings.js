const API_URL = "https://api.chess.com/pub";
const sendRequest = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`);
    return await response.json();
  } catch (e) {
    console.error(`Error for ${endpoint}`, e);

    throw e;
  }
};

export const getRating = async (username) => {
  const ratingInfo = await sendRequest(`/player/${username}/stats`);
  return ratingInfo;
};
