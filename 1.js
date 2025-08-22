// Array ichida object bo'lsin objectlarni price bo'yicha sort qiladigan algorithm tuzing!
 var drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]

function sortByPrice(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j].price > arr[j + 1].price) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(sortByPrice(drinks))