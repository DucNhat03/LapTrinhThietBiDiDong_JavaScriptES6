console.log("--------------------------------Kết quả bài số 05 --------------------------------");

const calcAvg = (scores) => scores.reduce((a, b) => a + b, 0) / scores.length;
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins thắng (${avgDolphins} đấu với ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas thắng (${avgKoalas} đấu với ${avgDolphins})`);
    } else {
        console.log("Không có đội nào thắng!");
    }
};

// Dữ liệu 1
const dolphinsScoresSet1 = [44, 23, 71];
const koalasScoresSet1 = [65, 54, 49];
checkWinner(calcAvg(dolphinsScoresSet1), calcAvg(koalasScoresSet1));

// Dữ liệu 2
const dolphinsScoresSet2 = [85, 54, 41];
const koalasScoresSet2 = [23, 34, 27];
checkWinner(calcAvg(dolphinsScoresSet2), calcAvg(koalasScoresSet2));
