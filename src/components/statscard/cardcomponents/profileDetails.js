import React, { useEffect, useState } from "react";
import { isOnline } from "../../../requests/isonline";
import { Grid, Typography, Link } from "@material-ui/core";
import avatarimage from "../../../avatarimage.png";
import moment from "moment";
const ProfileComponent = ({ profile }) => {
  const [country, setCountry] = useState("");
  const [onlinestatus, setOnline] = useState(false);
  const [lastOnline, setlastOnline] = useState("");
  const sendRequest = async () => {
    try {
      const response = await fetch(`${profile.country}`);
      return await response.json();
    } catch (e) {
      console.error(`Error for streamers endpoint`, e);

      throw e;
    }
  };
  const getCountry = async () => {
    const countryname = await sendRequest();
    setCountry(countryname.name);
    const onlineinfo = await isOnline(`${profile.username}`);
    setOnline(onlineinfo.online);
    setlastOnline(moment(moment.unix(profile.last_online)).fromNow());
  };
  useEffect(() => {
    getCountry();
  });
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      align="center"
      justify="center"
      direction="row"
      style={{ marginBottom: "40px" }}
    >
      {profile.avatar ? (
        <Grid
          xs={4}
          item
          align="center"
          spacing={2}
          alignItems="center"
          justify="center"
        >
          <img src={profile.avatar} alt="chess.com profile picture" />
        </Grid>
      ) : (
        <Grid
          xs={4}
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
        xs={2}
        item
        align="center"
        spacing={2}
        alignItems="center"
        justify="center"
      >
        {profile.name && (
          <Typography variant="body1" style={{ fontWeight: 600 }}>
            {profile.name.replace(/\b\w/g, (l) => l.toUpperCase())}
          </Typography>
        )}
        {profile.location ? (
          <Typography variant="body1" style={{ fontWeight: 600 }}>
            {" "}
            {profile.location != undefined &&
              profile.location.replace(/\b\w/g, (l) => l.toUpperCase())}
            , {country.replace(/\b\w/g, (l) => l.toUpperCase())}
          </Typography>
        ) : (
          <Typography variant="body1" style={{ fontWeight: 600 }}>
            {country.replace(/\b\w/g, (l) => l.toUpperCase())}
          </Typography>
        )}
      </Grid>
      <Grid
        xs={2}
        item
        align="center"
        spacing={2}
        alignItems="center"
        justify="center"
      >
        {onlinestatus ? (
          <>
            <Typography variant="body2" style={{ color: "green" }}>
              Currently Online
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="body2" style={{ color: "red" }}>
              Currently Offline
            </Typography>
            <Typography variant="body1">
              Last seen <br /> {lastOnline}{" "}
            </Typography>
          </>
        )}
      </Grid>
      <Grid
        xs={2}
        item
        align="center"
        spacing={0}
        alignItems="center"
        justify="center"
      >
        <Typography variant="body2" style={{ fontWeight: 600 }}>
          Followers
        </Typography>
        <Typography variant="body1">{profile.followers}</Typography>
      </Grid>
      <Grid
        xs={2}
        item
        align="center"
        spacing={0}
        alignItems="center"
        justify="center"
      >
        <Typography variant="body2" style={{ fontWeight: 600 }}>
          Membership status
        </Typography>
        <Typography variant="body1">
          {profile.status.replace(/\b\w/g, (l) => l.toUpperCase())}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProfileComponent;
