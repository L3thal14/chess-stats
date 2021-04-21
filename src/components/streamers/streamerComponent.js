import React, { useEffect, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import Button from "@material-ui/core/Button";
import Item from "./items";
import ReactLoading from "react-loading";
const StreamerComponent = () => {
  const API_URL = "https://api.chess.com/pub/streamers";
  const [streamerInfo, getStreamerinfo] = useState([
    {
      username: "",
      avatar: "",
      twitch_url: "",
      url: "",
      is_live: false,
    },
  ]);
  const [loading, setLoading] = useState(false);
  const sendRequest = async () => {
    try {
      const response = await fetch(`${API_URL}`);
      return await response.json();
    } catch (e) {
      console.error(`Error for streamers endpoint`, e);

      throw e;
    }
  };
  async function getStreamers() {
    try {
      const streamersinfo = await sendRequest();
      var streamers = streamersinfo.streamers;
      getStreamerinfo(streamers);
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getStreamers();
  });
  return (
    <>
      <Carousel
        itemsToShow={3}
        renderArrow={({ type, onClick }) => {
          const pointer = type === consts.PREV ? "👑" : "👑";
          return <Button onClick={onClick}>{pointer}</Button>;
        }}
      >
        {loading ? (
          streamerInfo.map((streamer) => {
            if (streamer.is_live) {
              return <Item streamer={streamer} />;
            }
          })
        ) : (
          <ReactLoading type="spin" color="#257EFF" height={70} width={70} />
        )}
      </Carousel>
    </>
  );
};

export default StreamerComponent;
