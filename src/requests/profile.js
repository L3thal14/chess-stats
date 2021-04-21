import { sendRequest } from "./sendrequest";

export const getProfile = async (username) => {
  const profileInfo = await sendRequest(`/player/${username}`);
  return profileInfo;
};
