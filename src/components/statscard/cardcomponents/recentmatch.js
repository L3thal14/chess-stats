import React, { useEffect, useState } from "react";
import { Grid, Typography, Link } from "@material-ui/core";
import { getProfile } from "../../../requests/profile";
import avatarimage from "../../../avatarimage.png";
const RecentMatchComponent = (props) => {
  const [name, setname] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setresult] = useState("");
  const [reason, setreason] = useState("");
  const [rating, setrating] = useState();
  const [type, settype] = useState("");
  const [avatar, setavatar] = useState("");
  const [username, setusername] = useState("");

  const getDetails = async (us) => {
    console.log(us);
    const profileinfo = await getProfile(us);
    console.log(profileinfo);
    setavatar(profileinfo.avatar);
    setusername(profileinfo.username);
    setname(profileinfo.name);
    setLoading(true);
  };
  useEffect(() => {
    {
      props.gamesdb[props.gamesdb.length - 1].white.result == "win"
        ? setresult("Won")
        : setresult("Lost");
    }
    {
      props.gamesdb[props.gamesdb.length - 1].white.username.toLowerCase() !=
      props.profile.username
        ? getDetails(props.gamesdb[props.gamesdb.length - 1].white.username)
        : getDetails(props.gamesdb[props.gamesdb.length - 1].black.username);
    }
    {
      props.gamesdb[props.gamesdb.length - 1].white.username.toLowerCase() !=
      props.profile.username
        ? setrating(props.gamesdb[props.gamesdb.length - 1].white.rating)
        : setrating(props.gamesdb[props.gamesdb.length - 1].black.rating);
    }
    {
      props.gamesdb[props.gamesdb.length - 1].white.result == "win"
        ? setreason(props.gamesdb[props.gamesdb.length - 1].black.result)
        : setreason(props.gamesdb[props.gamesdb.length - 1].white.result);
    }
    settype(props.gamesdb[props.gamesdb.length - 1].time_class);
  }, []);
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      style={{ marginBottom: "40px" }}
    >
      <Grid
        item
        align="center"
        spacing={2}
        alignItems="center"
        justify="center"
      >
        <Typography variant="h6" style={{ fontWeight: 600 }}>
          Latest Game Played
        </Typography>
      </Grid>
      {avatar ? (
        <Grid
          item
          align="center"
          spacing={2}
          alignItems="center"
          justify="center"
        >
          <img src={avatar} alt="chess.com profile picture" />
        </Grid>
      ) : (
        <Grid
          item
          align="center"
          spacing={2}
          alignItems="center"
          justify="center"
        >
          <img
            src={avatarimage}
            alt="chess.com profile picture"
            style={{ height: "200px", width: "200px" }}
          />
        </Grid>
      )}

      <Grid
        item
        align="center"
        spacing={2}
        alignItems="center"
        justify="center"
      >
        <Typography variant="body1">
          <b>Opponent:</b> {username}
        </Typography>
        {name && (
          <Typography variant="body1">
            <b>Name:</b> {name.replace(/\b\w/g, (l) => l.toUpperCase())}
          </Typography>
        )}
        <Typography variant="body1">
          <b>Result:</b> {result}(
          {reason.replace(/\b\w/g, (l) => l.toUpperCase())})
        </Typography>
        <Typography variant="body1">
          <b>Game Type:</b> {type.replace(/\b\w/g, (l) => l.toUpperCase())}
        </Typography>
        <Typography variant="body1">
          <b>Opponent rating:</b> {rating}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default RecentMatchComponent;
