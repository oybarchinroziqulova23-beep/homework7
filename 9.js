// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
 function plus(num1,num2){
    let sum1=0
    let sum2=0
    for( let i of num1){
        sum1=sum1*10+Number(i)
    }
    for(let j of num2){
        sum2=sum2*10 + Number(j)
    }
    return sum1+sum2
 }
 console.log(plus("111","22"))
 console.log(plus("0","9"))
