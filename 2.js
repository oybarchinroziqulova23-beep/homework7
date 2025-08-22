// objectToArray Function object olsin va o'sha objectni array ko'rinishida qaytarib bersin!.
var obj={
  likes: 2,
  dislikes: 3,
  followers: 10
}
function objectToArray(obj){
    let arr=[]
    
    for ( let key in obj){
        let miniarr=[]
        miniarr.push(key)
        miniarr.push(obj[key])
        arr.push(miniarr)
    }
    return arr
}
console.log(objectToArray(obj))
