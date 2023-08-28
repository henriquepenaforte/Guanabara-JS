var agora = new Date()

var hora = agora.getHours()

console.log(`Agora sao exatamente ${hora} hrs`)

if (hora < 5) {
    console.log("Vai dormir porra")
} else if (hora <= 12) {
    console.log("Bundia")
} else if (hora < 18) {
    console.log("Buenas tardes")
} else if (hora <= 23) {
    console.log("Buenas noches")
} else {
    console.log("trollando ctz")
}