import React, { useEffect, useState } from "react";
import ProfileComponent from "./cardcomponents/profileDetails";
import RatingComponent from "./cardcomponents/ratingDetails";
import GameStatsComponent from "./cardcomponents/gameStats";
import GameResultComponent from "./cardcomponents/gameresult";
import { getGames } from "../../requests/gameinfo";
import { getProfile } from "../../requests/profile";
import { getRating } from "../../requests/ratings";
import ReactLoading from "react-loading";
import { Paper } from "@material-ui/core";
function CardComponent(props) {
  const paperStyle = {
    padding: 40,
    marginTop: 40,
    minHeight: "350px",
    width: "950px",
    direction: "column",
    alignItems: "center",
    justify: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  const [profile, setProfile] = useState({});
  const [gamesdb, setGames] = useState();
  const [loading, setLoading] = useState(false);
  const [ratings, setRatings] = useState({});
  const gamesfinal = async () => {
    const allgames = await getGames(props.uname);
    setGames(allgames);
    const profileInfo = await getProfile(props.uname);
    setProfile(profileInfo);
    const ratinginfo = await getRating(props.uname);
    setRatings(ratinginfo);
    setLoading(true);
  };
  useEffect(() => {
    gamesfinal();
  }, []);

  return (
    <>
      {loading ? (
        <Paper elevation={10} style={paperStyle}>
          <ProfileComponent profile={profile} />
          <RatingComponent rating={ratings} />
          <GameStatsComponent profile={profile} gamesdb={gamesdb} />
          <GameResultComponent profile={profile} gamesdb={gamesdb} />
        </Paper>
      ) : (
        <ReactLoading type="spin" color="#257EFF" height={70} width={70} />
      )}
    </>
  );
}

export default CardComponent;
