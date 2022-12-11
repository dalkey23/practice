let num1 = [2,3,4,5,6,7,8,9];
let num2 = [1,2,3,4,5,6,7,8,9];

for (i in num1){
    for(j in num2){
        console.log(`${num1[i]}x${num2[j]}=${num1[i]*num2[j]}`);
    }
}