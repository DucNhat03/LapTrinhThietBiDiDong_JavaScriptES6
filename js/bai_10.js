const game = {
    team1: "Bayern Munich",
    team2: "Borussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnabry",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnabry", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// const players1 = game.players[0];
// const players2 = game.players[1];
// console.log(players1);
// console.log(players2);
const players1 = game.players[0];
const players2 = game.players[1];

const gk = players1[0];
// slice returns a new array with elements starting from index 1
const fieldPlayers = players1.slice(1); 
// combines players from both teams into one array
const allPlayers = [...players1, ...players2]; 
// const allPlayers = [players1, players2]; when written like this, it creates an array with two inner arrays
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
 // extracting values from game.odds: team1 = 1.33, draw = 3.25, ...

const { team1, x: draw, team2 } = game.odds;
// joins array elements into a string
const printGoals = (...players) =>
    console.log(`${players.length} goals were scored by: ${players.join(", ")}`); 

console.log("--------------------------------Kết quả bài số 10 --------------------------------");

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
 // spread operator to pass the elements of game.scored array
printGoals(...game.scored);

const likelyWinner = (team1 < team2 && game.team1) || (game.team2); 
// If game.odds.team1 < game.odds.team2 => team1 is more likely to win, otherwise, return team2
console.log(`${likelyWinner} is more likely to win.`);



