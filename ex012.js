/* HORA DO CLIENTE */
var agr= new Date()
var hora = agr.getHours()


/* HORA DO SERVIDOR */
var hora = 22
console.log(`Agora são ${hora} horas.`)

if(hora >= 6 && hora < 12) {
    console.log('Bom dia!')
} else if(hora >= 12 && hora <= 18) {
    console.log('Boa tarde!')

} else if(hora >= 1 && hora <= 5){
    console.log('Boa madrugada!')
} else {
    console.log('Boa noite!')
}