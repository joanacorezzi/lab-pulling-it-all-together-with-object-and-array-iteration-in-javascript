function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

//
function numPointsScored(playerName) {
    const game = gameObject();

    for(let team in game) { 
        const players =  game[team].players;
        for (let player in players) {
            if (player === playerName) {
                return players[player].points;
            }
        }
    }
}
//
function shoeSize(playerName) {
    const game = gameObject();
    for (let team in game) {
        const players = game[team].players;
        for (let player in players) {
            if (player === playerName) {
                return players[player].shoe;
            }
        }
    }
}
//
function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
}
//
function teamNames() {
    const game = gameObject();
    const names = [];
    for (let team in game) {
        names.push(game[team].teamName);
    }
    return names;
}
//
function playerNumbers(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            const numbers = [];
            const players = game[team].players;
            for (let player in players) {
                numbers.push(players[player].number);
            }
            return numbers;
        }
    }
}
//
function playerStats(playerName) {
const game = gameObject();
for (let team in game) {
    const players = game[team].players;
    for (let player in players) {
        if (player === playerName) {
            return players[player];
        }
    }
 }
}
//
function bigShoeRebounds() {
    const game = gameObject();
    let largestShoe = 0;
    let rebounds = 0;
    for (let team in game) {
const players = game[team].players;
for (let player in players) {
    if (players[player].shoe > largestShoe) {
        largestShoe = players[player].shoe;
        rebounds = players[player].rebounds;
    }
}
    }
    return rebounds;
}
// Bonus 
//Bonus part 1= Determining which player scored the most points.
function mostPointsScored() {
   const game = gameObject();
   let highestPoints = 0;
   let topPlayer = "";
   for (let team in game) {
    const players = game[team].players;
    for (let player in players) {
    if (players[player].points > highestPoints) {
        highestPoints = players[player].points;
        topPlayer = player;
   }
    }
}
   return topPlayer;
}
//Bonus part 2= Identifying which team has the most total points
function winningTeam() {
const game = gameObject();
let homePoints = 0;
let awayPoints = 0;
for (let player in game.home.players) {
    homePoints += game.home.players[player].points;
}
for (let player in game.away.players) {
    awayPoints += game.away.players[player].points;
}
if (homePoints > awayPoints) {
    return game.home.teamName;
} else if (awayPoints > homePoints) {
    return game.away.teamName;
} else { 
    return "Tie";
}
}
//Bonus part 3= Finding the player with the longest name.
function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    for (let team in game) {
        const players = game[team].players;
        for (let player in players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }
    return longestName;
}
//Super bonus=  Returns true if the player with the longest name has the most steals
 function doesLongNameStealATon() {
 const game = gameObject();
 //Step 1: finding the player with the longest name
 let longestName = "";
 for (let team in game) {
    const players = game[team].players;
    for (let player in players) {
if (player.length > longestName.length) {
    longestName = player;
}
    }
 }
 //Step 2: finding who has the most steals
 let mostSteals = 0;
 let topStealer = "";
 for (let team in game) {
    const players = game[team].players;
    for (let player in players) {
        if (players[player].steals > mostSteals) {
            mostSteals = players[player].steals;
            topStealer = player;
        }        
    }
 }
 //Step 2: compare
 return longestName === topStealer;
}



module.exports = {
  gameObject,
  numPointsScored,
  shoeSize,
  teamColors,
  teamNames,
  playerNumbers,
  playerStats,
  bigShoeRebounds,
  mostPointsScored,
  winningTeam,
  playerWithLongestName,
  doesLongNameStealATon
};
