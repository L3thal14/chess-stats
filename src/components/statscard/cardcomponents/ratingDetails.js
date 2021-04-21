import React from "react";
import { Grid, Typography } from "@material-ui/core";
const RatingComponent = ({ rating }) => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      style={{ marginBottom: "40px" }}
    >
      {rating.chess_blitz && (
        <Grid
          xs={4}
          item
          align="center"
          spacing={2}
          alignItems="center"
          justify="center"
        >
          <Typography variant="body2" style={{ fontWeight: 600 }}>
            Blitz Rating
          </Typography>
          <Typography variant="body1">
            Current: {rating.chess_blitz.last.rating}{" "}
          </Typography>
          <Typography variant="body1">
            Best: {rating.chess_blitz.best.rating}
          </Typography>
        </Grid>
      )}
      {rating.chess_bullet && (
        <Grid
          xs={4}
          item
          align="center"
          spacing={2}
          alignItems="center"
          justify="center"
        >
          <Typography variant="body2" style={{ fontWeight: 600 }}>
            Bullet Rating
          </Typography>
          <Typography variant="body1">
            Current: {rating.chess_bullet.last.rating}{" "}
          </Typography>
          <Typography variant="body1">
            Best: {rating.chess_bullet.best.rating}
          </Typography>
        </Grid>
      )}
      {rating.chess_rapid && (
        <Grid
          xs={4}
          item
          align="center"
          spacing={2}
          alignItems="center"
          justify="center"
        >
          <Typography variant="body2" style={{ fontWeight: 600 }}>
            Rapid Rating
          </Typography>
          <Typography variant="body1">
            Current: {rating.chess_rapid.last.rating}{" "}
          </Typography>
          <Typography variant="body1">
            Best: {rating.chess_rapid.best.rating}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default RatingComponent;
