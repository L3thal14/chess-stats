export const getFirstMoveString = (games, username, color) => {
  const colorGames = games.filter(
    (g) => g[color].username.toLowerCase() === username.toLowerCase()
  );

  const firstMoves = colorGames.map((g) => {
    const regex = color === "white" ? /1\. (.+?) / : /1\.\.\. (.+?) /;
    const match = g.pgn.match(regex);
    if (match == null) {
      return "(none)";
    }

    return match[1];
  });
  var freq = 1;
  var m = 0;
  var move;
  for (var i = 0; i < firstMoves.length; i++) {
    for (var j = i; j < firstMoves.length; j++) {
      if (firstMoves[i] === firstMoves[j]) m++;
      if (freq < m) {
        freq = m;
        move = firstMoves[i];
      }
    }
    m = 0;
  }
  var Percentage = freq / firstMoves.length;
  return `${move} (${Math.round(Percentage * 100)}%)`;
};
