// function yarating u arraychida object berilsin o'sha objectdagi userlarning namelarini array qilib qaytarilsin

let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" }
]

function Collact(arr){
    let names=[]
    for ( let obj of arr){
        names.push(obj.name)
    }
    return names
}
console.log(Collact(users))