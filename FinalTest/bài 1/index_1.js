let a = parseInt(prompt("Please enter a number"));
let b = parseInt(prompt("Please enter a number"));
let sumOfPrimesFrom_aTo_b = 0;
for (let i = a; i < b; i++) {
    let flag = 0;
   if (i < 2) {
       flag=1;
       break;
   } else {
       for (let j = 2; j < i; j++) {
           if  (i % j == 0) {
               flag = 1;
               break;
           }
           flag = 0;
       }
   }
   if(i > 1 && flag === 0) {
       sumOfPrimesFrom_aTo_b += i;
   }
}

console.log("Tổng các số nguyên tố từ a đến b là:", sumOfPrimesFrom_aTo_b)
const sum=sumOfPrimesFrom_aTo_b;
const SumFromaTob = document.write(sum);