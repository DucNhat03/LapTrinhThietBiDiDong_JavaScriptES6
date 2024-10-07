const calcAverage = (scores) => scores.reduce((a, b) => a + b, 0) / scores.length;

const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];
const dolphinsAvg1 = calcAverage(dolphinsScores1);
const koalasAvg1 = calcAverage(koalasScores1);

console.log("--------------------------------Kết quả bài số 03 --------------------------------");
if (dolphinsAvg1 > koalasAvg1 && dolphinsAvg1 >= 100) {
    console.log(`Dolphins thắng với điểm số trung bình là ${dolphinsAvg1}`);
} else if (koalasAvg1 > dolphinsAvg1 && koalasAvg1 >= 100) {
    console.log(`Koalas thắng với điểm số trung bình là ${koalasAvg1}`);
} else if (dolphinsAvg1 === koalasAvg1 && dolphinsAvg1 >= 100 && koalasAvg1 >= 100) {
    console.log(`Hai đội hòa nhau với điểm số trung bình là ${dolphinsAvg1}`);
} else {
    console.log("Không có đội nào thắng!");
}
