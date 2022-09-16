
let idade = 19
let listadeparticipantes = ["Davi, Paulo, Ana, Paula"]
let data = 17/10/22

if (idade >= 18){
console.log ("Participante tem idade para participar")
if (listadeparticipantes.length < 100){
listadeparticipantes.push("Davi")
console.log ("Cadastro realizado")
if (data <= 16/10/22)
console.log ("Data disponível para evento")
if (data >= 17/10/22)
console.log ("Data não disponível para evento")
} else {
    console.log ("cadastro não realizado limite de participantes atingido")
}
}
else{
    console.log ("Você não tem idade suficiente para participar do evento")
    
}
console.log(listadeparticipantes)