var agora = new Date
var diaSem = agora.getDay()
console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
}