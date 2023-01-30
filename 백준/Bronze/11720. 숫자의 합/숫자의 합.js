const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//5
//54321
let answer = 0;
let num = input[1].split("");

for (let i = 0; i<num.length; i++) {
    answer += Number(num[i])
}

 console.log(answer)