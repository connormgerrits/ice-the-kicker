function calculatePassingScore(player) {
  const yards = parseFloat((player.stats.passing.yards / 25).toFixed(2))
  const touchdowns = player.stats.passing.touchdowns * 6
  const interceptions = player.stats.passing.interceptions * -3

  return yards + touchdowns + interceptions
}

function calculateRushingScore(player) {
  const yards = parseFloat((player.stats.rushing.yards / 10).toFixed(2))
  const touchdowns = player.stats.rushing.touchdowns * 6
  const fumbles = player.stats.rushing.fumbles * -3

  return yards + touchdowns + fumbles
}

function calculateReceivingScore(player) {
  const receptions = player.stats.receiving.receptions
  const yards = parseFloat((player.stats.receiving.yards / 10).toFixed(2))
  const touchdowns = player.stats.receiving.touchdowns * 6
  const fumbles = player.stats.receiving.fumbles * -3

  return receptions + yards + touchdowns + fumbles
}

function calculateReturnScore(player) {
  const kickYards = parseFloat((player.stats.return.kickreturn.yards / 15).toFixed(2))
  const kickTouchdowns = player.stats.return.kickreturn.touchdowns * 6
  const kickFumbles = player.stats.return.kickreturn.fumbles * -3

  const puntYards = parseFloat((player.stats.return.puntreturn.yards / 15).toFixed(2))
  const puntTouchdowns = player.stats.return.puntreturn.touchdowns * 6
  const puntFumbles = player.stats.return.puntreturn.fumbles * -3

  return kickYards + kickTouchdowns + kickFumbles + puntYards + puntTouchdowns + puntFumbles
}

module.exports.calculateScore = function (player) {
  switch (player.position) {
    case 'QB':
      return calculatePassingScore(player) +
        calculateRushingScore(player)
    case 'RB':
    case 'WR':
      return calculateRushingScore(player) +
        calculateReceivingScore(player) +
        calculateReturnScore(player)
    case 'TE':
      return calculateReceivingScore(player)
    default:
      return 0
  }
}
