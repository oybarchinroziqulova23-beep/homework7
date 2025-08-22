// afterNYears function yarating people deb nomlanagan object va n year ni kiritilsin n kiritilganda objectdagi hamma qiymatlar n yerga ortishi kerak!.
const obj={
  "Joel" : 32,
  "Fred" : 44,
  "Reginald" : 65,
  "Susan" : 33,
  "Julian" : 13
}
let n=Number(prompt("Qiymat qanchaga o'zgarsin ?"))

function afterNYears(obj,n){
    for (let key in obj){
        obj[key]=obj[key]+n
    }
    return obj
}
console.log(afterNYears(obj,n))