// Dữ liệu 1
let massMark = 78; // kg
let heightMark = 1.69; // m
let massJohn = 92; // kg
let heightJohn = 1.95; // m

// Công thức tính BMI
const calcBMI = (mass, height) => mass / (height * height);

let BMIMark = calcBMI(massMark, heightMark);
let BMIJohn = calcBMI(massJohn, heightJohn);

console.log("--------------------------------Kết quả bài số 01 --------------------------------");

// So sánh BMI của Mark và John
let markHigherBMI = BMIMark > BMIJohn;
console.log(`BMI của Mark là ${BMIMark}, BMI của John là ${BMIJohn}`);
console.log(markHigherBMI ? "Mark có BMI cao hơn John" : "John có BMI cao hơn Mark");

// Dữ liệu 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMIMark = calcBMI(massMark, heightMark);
BMIJohn = calcBMI(massJohn, heightJohn);

markHigherBMI = BMIMark > BMIJohn;
console.log(`BMI của Mark là ${BMIMark}, BMI của John là ${BMIJohn}`);
console.log(markHigherBMI ? "Mark có BMI cao hơn John" : "John có BMI cao hơn Mark");
