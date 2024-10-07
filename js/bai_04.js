const bills = [275, 40, 430];
const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const tips = bills.map(calcTip);
const totals = bills.map((bill, index) => bill + tips[index]);

console.log("--------------------------------Kết quả bài số 04 --------------------------------");
bills.forEach((bill, index) => {
    console.log(`Hóa đơn là ${bill}, tiền boa là ${tips[index]}, tổng là ${totals[index]}`);
});
