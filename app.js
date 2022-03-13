let x = "5,10,15,20,25";
let y = "16,19,23,26,30";

const myX = x.split(",");
const myY = y.split(",");

var sumX = getSum(myX);
var sumY = getSum(myY);

var sumXY = getSum(getXY(myX, myY));
var sumX2 = getSum(getVar2(myX));
var sumY2 = getSum(getVar2(myY));
var n = myX.length;

// first equ.

// second equ.

detNormal = (sumX2 * n) - (sumX * sumX);
detA = ((sumXY * n ) - (sumY * sumX)) / detNormal;
detB = ((sumX2 * sumY) - (sumXY * n)) / detNormal;

function getSum(myArry) {
    var sum = 0;
    myArry.forEach(element => {
        sum = sum + parseInt(element);
    });
    return sum;
}

function getVar2(myArry) {
    var arrOut = [];
    myArry.forEach(element => {
        arrOut.push((parseInt(element)) ** 2);
    });
    return arrOut;
}

function getXY(x, y) {
    var arrOut = [];
    for (let i = 0; i <= x.length - 1; i++) {
        arrOut.push(x[i] * y[i]);
    }
    return arrOut;
}



result = [];

console.log("sumX: " + sumX + "\n",
 "sumY: " + sumY + "\n",
  "sumXY: " + sumXY + "\n",
  "sumX2: " + sumX2 +"\n",
  "sumY2: " + sumY2 +"\n",
  "detA: " + detA +"\n",
  "detB: " + detB +"\n");