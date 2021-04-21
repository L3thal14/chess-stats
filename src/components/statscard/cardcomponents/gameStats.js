import React, { useEffect, useState } from "react";
import { firstlastgame } from "../../../requests/firstlastgame";
import { getFirstMoveString } from "../../../requests/firstmovestring";
import { Grid, Typography } from "@material-ui/core";
const GameStatsComponent = (props) => {
  const [firstgame, setfirstgame] = useState("");
  const [lastgame, setlastgame] = useState("");
  const [whitemove, setwhitemove] = useState("");
  const [blackmove, setblackmove] = useState("");

  useEffect(() => {
    const firstlast = firstlastgame(props.gamesdb);
    setfirstgame(firstlast.firstgame.firstGame);
    setlastgame(firstlast.lastgame.lastGame);
    setwhitemove(
      getFirstMoveString(props.gamesdb, props.profile.username, "white")
    );
    setblackmove(
      getFirstMoveString(props.gamesdb, props.profile.username, "black")
    );
  }, []);
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      style={{ marginBottom: "40px" }}
    >
      <Grid
        xs={3}
        item
        align="center"
        spacing={2}
        alignItems="center"
        justify="center"
      >
        <Typography variant="body2" style={{ fontWeight: 600 }}>
          Number of Games
        </Typography>
        <Typography variant="body1">{props.gamesdb.length}</Typography>
      </Grid>
      <Grid
        xs={3}
        item
        align="center"
        spacing={2}
        alignItems="center"
        justify="center"
      >
        <Typography variant="body2" style={{ fontWeight: 600 }}>
          First Game
        </Typography>
        <Typography variant="body1">{firstgame}</Typography>
      </Grid>
      <Grid
        xs={3}
        item
        align="center"
        spacing={2}
        alignItems="center"
        justify="center"
      >
        <Typography variant="body2" style={{ fontWeight: 600 }}>
          Latest Game
        </Typography>
        <Typography variant="body1">{lastgame}</Typography>
      </Grid>
      <Grid
        xs={3}
        item
        align="center"
        spacing={2}
        alignItems="center"
        justify="center"
      >
        <Typography variant="body2" style={{ fontWeight: 600 }}>
          Most Played First Move
        </Typography>
        <Typography variant="body1">♔ {whitemove}</Typography>
        <Typography variant="body1">♚ {blackmove}</Typography>
      </Grid>
    </Grid>
  );
};

export default GameStatsComponent;
