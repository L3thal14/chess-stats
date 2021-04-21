const API_URL = "https://api.chess.com/pub";
export const sendRequest = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`);
    return await response.json();
  } catch (e) {
    console.error(`Error for ${endpoint}`, e);

    throw e;
  }
};
