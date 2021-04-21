import { sendRequest } from "./sendrequest";

export const isOnline = async (username) => {
  const profileInfo = await sendRequest(`/player/${username}/is-online`);
  return profileInfo;
};
