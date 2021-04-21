var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const firstlastgame = (games) => {
  const sortedGames = games.sort((a, b) => a.end_time - b.end_time);
  const firstDate =
    sortedGames[0] == null
      ? new Date(0)
      : new Date(sortedGames[0].end_time * 1000);
  const latestDate =
    sortedGames[sortedGames.length - 1] == null
      ? new Date(0)
      : new Date(sortedGames[sortedGames.length - 1].end_time * 1000);
  const firstGameDate = firstDate.getDate();
  const firstGameMonth = months[firstDate.getMonth()];
  const firstGameYear = firstDate.getFullYear();
  const latestGameDate = latestDate.getDate();
  const latestGameMonth = months[latestDate.getMonth()];
  const latestGameYear = latestDate.getFullYear();
  var firstGame = `${firstGameDate} ${firstGameMonth} ${firstGameYear}`;
  var lastGame = `${latestGameDate} ${latestGameMonth} ${latestGameYear}`;
  return { firstgame: { firstGame }, lastgame: { lastGame } };
};
