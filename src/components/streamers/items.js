import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import ReactLoading from "react-loading";
import CardActionArea from "@material-ui/core/CardActionArea";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { getProfile } from "../../requests/profile";
import "./styles.css";

const styles = (muiBaseTheme) => ({
  card: {
    width: "250px",
    height: "300px",
    margin: "5px",
    transition: "0.3s",
    background: "rgba(0,0,0,0.3)",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.2)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.7)",
    },
  },
  media: {
    height: 10,
    paddingTop: "56.25%",
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3,
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`,
  },
  heading: {
    fontWeight: "bold",
    color: "#ffffff",
  },
  title: {
    fontWeight: "bold",
    color: "#ffffff",
  },
  subheading: {
    lineHeight: 1.6,
    color: "rgb(255 255 255 / 65%)",
  },
  avatar: {
    margin: "20px",
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit,
    },
  },
});

function Item(props) {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState("");
  const [avatar, setAvatar] = useState("");
  const [title, setTitle] = useState("");
  const playerProfile = async () => {
    const profileInfo = await getProfile(`${props.streamer.username}`);
    setProfile(profileInfo.name);
    setAvatar(profileInfo.avatar);
    setTitle(profileInfo.title);
    setLoading(true);
  };
  useEffect(() => {
    playerProfile();
  });
  return (
    <>
      {loading ? (
        <div className="item">
          <Card
            className={props.classes.card}
            style={{ height: "50vh", width: "40vh" }}
            align="center"
          >
            <CardActionArea
              href={props.streamer.twitch_url}
              target="_blank"
              rel="noreferrer"
            >
              <Avatar
                variant="square"
                className={props.classes.avatar}
                src={avatar}
                style={{ height: "100px", width: "100px" }}
              />
              <CardContent className={props.classes.content}>
                <Typography
                  className={props.classes.heading}
                  variant={"h6"}
                  gutterBottom
                >
                  {props.streamer.username}
                </Typography>
                <Box alignItems="center" display="flex">
                  {title ? (
                    <Card
                      style={{
                        width: "fit-content",
                        height: "fit-content",
                        backgroundColor: "red",
                        padding: "2%",
                        marginBottom: "8px",
                      }}
                    >
                      <Typography
                        variant={"caption"}
                        className={props.classes.title}
                      >
                        {title}
                      </Typography>
                    </Card>
                  ) : (
                    <p></p>
                  )}
                  <Typography
                    style={{
                      padding: "10px",
                      height: "40px",
                    }}
                    className={props.classes.subheading}
                    variant={"h6"}
                    gutterBottom
                  >
                    {profile}
                  </Typography>
                </Box>
                <Typography
                  style={{ display: "block" }}
                  className={props.classes.subheading}
                  variant={"caption"}
                >
                  <Link
                    href={`${props.streamer.url}`}
                    color="inherit"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "#059BFF" }}
                  >
                    Chess.com Profile
                  </Link>
                </Typography>
                <Divider className={props.classes.divider} light />
                <Typography
                  className={props.classes.subheading}
                  variant={"caption"}
                >
                  <span className="dot Blink"></span>&nbsp; LIVE
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ) : (
        <ReactLoading type="spin" color="#257EFF" height={70} width={70} />
      )}
    </>
  );
}

Item = withStyles(styles)(Item);
export default Item;
