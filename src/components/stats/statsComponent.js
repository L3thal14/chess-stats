import React, { useState, useEffect } from "react";
import StreamerComponent from "../streamers/streamerComponent";
import CardComponent from "../statscard/mainCard";
import { Grid, Typography, Link } from "@material-ui/core";
import { getProfile } from "../../requests/profile";
function StatsComponent(props) {
  const [user, setuser] = useState("");
  const [link, setlink] = useState("");
  const getDetails = async () => {
    const profileinfo = await getProfile(props.uname);
    setlink(profileinfo.url);
    setuser(profileinfo.name);
    console.log(user);
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div>
      <Grid
        item
        style={{ paddingTop: "60px", paddingBottom: "40px" }}
        align="center"
      >
        <Typography
          variant={"h5"}
          gutterBottom
          style={{ fontWeight: "bold", color: "#ffffff" }}
        >
          {user ? (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#059BFF" }}
            >
              {user.replace(/\b\w/g, (l) => l.toUpperCase())}
            </Link>
          ) : (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#059BFF" }}
            >
              {props.uname}
            </Link>
          )}{" "}
          Stats Sheet
        </Typography>
      </Grid>
      <Grid container direction={"column"} spacing={24}>
        <Grid
          item
          align="center"
          spacing={0}
          alignItems="center"
          justify="center"
        >
          <CardComponent uname={props.uname} />
        </Grid>
        <Grid item style={{ paddingTop: "60px" }} align="center">
          <Typography
            variant={"h5"}
            gutterBottom
            style={{ fontWeight: "bold", color: "#ffffff" }}
          >
            <Link
              href="/chess-stats"
              style={{
                textDecoration: "none",
                color: "#ffff",
                fontFamily: "system-ui",
              }}
            >
              Generate a new sheet
            </Link>
          </Typography>
        </Grid>
        <Grid item style={{ paddingTop: "60px" }} align="center">
          <Typography
            variant={"h5"}
            gutterBottom
            style={{ fontWeight: "bold", color: "#ffffff" }}
          >
            CURRENTLY STREAMING
          </Typography>
        </Grid>
        <Grid item style={{ padding: "40px" }} align="center">
          <StreamerComponent />
        </Grid>
        <Grid item style={{ padding: "40px" }} align="center">
          <Typography style={{ fontWeight: "bold", color: "#ffffff" }}>
            Developed by{" "}
            <Link
              href="https://github.com/L3thal14"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#059BFF" }}
            >
              Karthik
            </Link>
          </Typography>
          <Typography
            style={{
              fontWeight: "bold",
              color: "#ffffff",
              marginBottom: "25px",
            }}
          >
            {" "}
            Checkout the project on{" "}
            <Link
              href="https://github.com/L3thal14/chess-stats"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#059BFF" }}
            >
              Github
            </Link>
          </Typography>
          <Typography
            style={{ fontWeight: "bold", color: "#ffffff", fontSize: "14px" }}
          >
            Chess.com Stats Viewer is not affiliated with or endorsed by
            Chess.com.
          </Typography>
          <Typography
            style={{ fontWeight: "bold", color: "#ffffff", fontSize: "14px" }}
          >
            It just utilises the{" "}
            <Link
              href=" https://www.chess.com/news/view/published-data-api"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#059BFF" }}
            >
              chess.com public API
            </Link>{" "}
            to get user stats.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default StatsComponent;
