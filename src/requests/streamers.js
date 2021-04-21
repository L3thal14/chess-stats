const API_URL = "https://api.chess.com/pub/streamers";
const sendRequest = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    return await response.json();
  } catch (e) {
    console.error(`Error for streamers endpoint`, e);

    throw e;
  }
};

export const getStreamers = async () => {
  const streamers = await sendRequest();
  console.log(streamers);
};
