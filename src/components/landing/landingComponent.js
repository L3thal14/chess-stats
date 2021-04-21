import React, { useState } from "react";
import chessboard from "./chessboard.jpg";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
const LandingComponent = ({ getUsername }) => {
  const [username, setusername] = useState("");
  const paperStyle = {
    padding: 80,
    height: "50vh",
    width: 280,
    direction: "column",
    alignItems: "center",
    justify: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  const root = {
    minWidth: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  const btnstyle = {
    margin: "8px 0",
    backgroundColor: "#257eff",
    textColor: "#ffff",
  };
  const getUser = (e) => {
    setusername(e.target.value);
  };
  const buttonfunc = () => {
    getUsername(username);
  };
  return (
    <div style={{ display: "inline-block", height: "100%" }}>
      <Grid item align="center" style={{ paddingTop: "5vh" }}>
        <Paper elevation={10} style={paperStyle}>
          <Typography
            variant="h5"
            style={{
              fontFamily: "system-ui",
            }}
          >
            Chess.com Stats Viewer
          </Typography>
          <Grid align="center" style={{ padding: "30px" }}>
            <Avatar
              variant="rounded"
              style={{ height: "250px", width: "250px" }}
              src={chessboard}
            />
          </Grid>
          <Typography
            variant="body1"
            style={{ fontFamily: "system-ui", paddingBottom: "20px" }}
          >
            <b>Enter a chess.com username</b>
          </Typography>
          <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
            onChange={getUser}
          />
          <Button
            type="submit"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={buttonfunc}
          >
            <Typography
              style={{
                color: "#ffffff",
                fontWeight: "bold",
                fontFamily: "system-ui",
              }}
            >
              CHECK!
            </Typography>
          </Button>
        </Paper>
      </Grid>
      <Grid item style={{ padding: "40px" }} align="center">
        <Typography
          style={{
            fontWeight: "bold",
            color: "#ffffff",
            fontFamily: "system-ui",
          }}
        >
          Developed by{" "}
          <Link
            href="https://github.com/L3thal14"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "#059BFF",
              fontFamily: "system-ui",
            }}
          >
            Karthik
          </Link>
        </Typography>
        <Typography
          style={{
            fontWeight: "bold",
            color: "#ffffff",
            marginBottom: "25px",
            fontFamily: "system-ui",
          }}
        >
          {" "}
          Checkout the project on{" "}
          <Link
            href="https://github.com/L3thal14/chess-stats"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "#059BFF",
              fontFamily: "system-ui",
            }}
          >
            Github
          </Link>
        </Typography>
        <Typography
          style={{
            fontWeight: "bold",
            color: "#ffffff",
            fontSize: "14px",
            fontFamily: "system-ui",
          }}
        >
          Chess.com Stats Viewer is not affiliated with or endorsed by
          Chess.com.
        </Typography>
        <Typography
          style={{
            fontWeight: "bold",
            color: "#ffffff",
            fontSize: "14px",
            fontFamily: "system-ui",
          }}
        >
          It just utilises the{" "}
          <Link
            href=" https://www.chess.com/news/view/published-data-api"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "#059BFF",
              fontFamily: "system-ui",
            }}
          >
            chess.com public API
          </Link>{" "}
          to get user stats.
        </Typography>
      </Grid>
    </div>
  );
};

export default LandingComponent;
