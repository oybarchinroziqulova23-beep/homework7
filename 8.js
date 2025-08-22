// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
function firstUniqueChar(str){
    let obj={}
    for ( let i of str){
        if (obj[i]){
            obj[i]=obj[i]+1
        }
        else{
            obj[i]=1
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === 1) {
            return i
        }
    }
    return -1
}
console.log(firstUniqueChar("letcode"))
console.log(firstUniqueChar("kaaktus"))
console.log(firstUniqueChar("yyuu"))