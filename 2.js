let str=prompt("so'z kiriting")
let key=Number(prompt("raqam kiriting"))
function code(str,key){
    let newStr=""
    for (let i=0; i<=str.length; i++){
        let change=.charCodeAte(str[i])+key
        newStr.push(String.fromCharCode(change))
    } 
    return newStr 
}
console.log(code(str,key))