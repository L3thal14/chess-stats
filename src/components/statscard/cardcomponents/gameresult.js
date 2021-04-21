import React, { useEffect, useState } from "react";
import { Grid, Typography, Link } from "@material-ui/core";
import RecentMatchComponent from "./recentmatch";
import GamesResultChart from "./resultschart";
const GameResultComponent = (props) => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      style={{ marginBottom: "40px" }}
    >
      <Grid
        xs={6}
        item
        align="center"
        spacing={2}
        alignItems="center"
        justify="center"
      >
        <GamesResultChart gamesdb={props.gamesdb} />
      </Grid>
      <Grid
        xs={6}
        item
        align="left"
        spacing={2}
        alignItems="center"
        justify="center"
      >
        <RecentMatchComponent profile={props.profile} gamesdb={props.gamesdb} />
      </Grid>
    </Grid>
  );
};

export default GameResultComponent;
