import React, { useEffect, useState } from "react";
import { Doughnut, defaults } from "react-chartjs-2";
import { Typography } from "@material-ui/core";
import ReactLoading from "react-loading";
defaults.global.legend.position = "left";
const GamesResultChart = (props) => {
  var arr = [];
  var resultarr = [];
  const [results, setresults] = useState([]);
  const [chartdata, setchartdata] = useState({});
  const [loading, setLoading] = useState(false);
  const gameresult = [
    "checkmated",
    "resigned",
    "timeout",
    "stalemate",
    "abandoned",
    "timevsinsufficient",
    "insufficient",
    "repetition",
  ];
  const chartlegend = [
    "Checkmate",
    "Resignation",
    "Timeout",
    "Stalemate",
    "Game Abandoned",
    "Time vs Insufficient Material",
    "Insufficient Material",
    "Repetition",
  ];
  const countGames = async (array, res) => {
    var counts = {};
    for (var i = 0; i < array.length; i++) {
      var num = array[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    resultarr.push(counts[`${res}`]);
  };
  const chart = () => {
    props.gamesdb.map((game) => {
      game.white.result == "win"
        ? arr.push(game.black.result)
        : arr.push(game.white.result);
    });
    for (var j = 0; j < gameresult.length; j++) countGames(arr, gameresult[j]);
    setchartdata({
      labels: chartlegend,
      datasets: [
        {
          label: "Game Results",
          data: resultarr,
          backgroundColor: [
            "#36a2eb",
            "#ff9f3f",
            "#ff6484",
            "#4bc0c0",
            "#ffcd56",
            "#cacbcf",
            "#9967ff",
            "#93eb36",
            "#eb36d3",
          ],
        },
      ],
    });
    setLoading(true);
  };
  useEffect(() => {
    chart();
  }, []);
  return (
    <>
      <Typography
        variant="h6"
        align="right"
        style={{ marginRight: "80px", fontWeight: 600 }}
      >
        Result of Games
      </Typography>
      {loading ? (
        <Doughnut
          data={chartdata}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
            legend: {
              position: "left",
              labels: {
                boxWidth: 10,
              },
            },
          }}
        />
      ) : (
        <ReactLoading type="spin" color="#257EFF" height={70} width={70} />
      )}
    </>
  );
};

export default GamesResultChart;
