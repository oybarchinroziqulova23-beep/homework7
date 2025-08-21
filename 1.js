const menyu = {
    palov: 25000,
    somsa: 10000,
    shashlik: 15000,
    choy: 3000,
    salat: 5000

};
function hisobla(ovqat) {
    let sum = 0
    for (let i of ovqat) {
        if (i in menyu) {
            sum = sum + menyu[i]
        }

    }
    chegirma(sum)
    // console.log(sum)
}

function chegirma(sum) {
    if (sum >= 50000) {
        sum = 0.9 * sum
        console.log(`sizning buyurmangiz 50 ming so'mdan oshgani uchun bizda 10% chegirma, 
            kassaga ${sum}so'm to'lov qiling`)
        tasdiqla()
    }else{
    console.log(`sizning buyurmangiz chegirmaga ega emas,kassaga ${sum} to'lov qiling`)
    tasdiqla()}
}

function tasdiqla() {
    console.log("Buyurtma qabul qilindi :) !")
}

function Buyurtma(ovqat, hisobla) {
    console.log(ovqat)
    hisobla(ovqat)

}
let ovqat = ["shashlik", "choy", "salat"]
Buyurtma(ovqat, hisobla)
