const billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const tips = [];
const totals = [];

const billsLen = billss.length;
for (let index = 0; index < billss; index++) {
    const element = billss[index];
    tips.push(calcTip(element));
    totals.push(element + tips[index]);
}

const calcAverage = (arr) => {
    var sum = 0;
    arr.forEach((element) => {
        sum += element;
    });
    return sum / arr.length;
};
console.log("--------------------------------Kết quả bài số 08 --------------------------------");

console.log(calcAverage(totals));
