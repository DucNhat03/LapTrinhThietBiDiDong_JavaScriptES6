const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};

mark.calcBMI();
john.calcBMI();
console.log("--------------------------------Kết quả bài số 07 --------------------------------");
console.log(mark.BMI > john.BMI 
    ? `${mark.fullName}'s BMI (${mark.BMI.toFixed(2)}) is higher than ${john.fullName}'s (${john.BMI.toFixed(2)})!` 
    : `${john.fullName}'s BMI (${john.BMI.toFixed(2)}) is higher than ${mark.fullName}'s (${mark.BMI.toFixed(2)})!`);
