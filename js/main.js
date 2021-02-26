function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
    //console.log(document.getElementById("agradecimento"))
    alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://github.com/alexronny91")
    //window.location.href = "https://github.com/alexronny91"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("Trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
// function soma(n1, n2){
//     return (n1 +n2)
// }

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome)
// }

// //var validar (Escopo Global)
// function validaIdade(idade){
//     var validar //(Escopo Local)
//     if (idade >= 18){
//         validar = true
//     }else{
//         validar = false
//     }
//     return validar
// }

// var idade = prompt("Qual a sua idade?")
// console.log(validaIdade(idade))

// // alert(soma(5, 10))
// // alert(setReplace("Vai Japão", "Japão", "Brasil"))

// // var d = new Date()
// // //alert(d.getMonth()+1)
// // alert(d.getMinutes())
// // alert(d.getDay())
// // alert(d.getMinutes())

// // var count
// // for(count=0; count <= 5; count++){
// //     alert(count)
// // }

// // var count = 0
// // while (count <= 5){
// //     console.log(count)
// //     alert(count)
// //     //count = count + 1
// //     count++
// // }

// // var idade = prompt("Qual a sua idade?")
// // //var idade = 18
// // if(idade >= 18){
// //     alert("Maior de idade")
// // }else{
// //     alert("Menor de idade")
// // }

// // var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
// // console.log(frutas)
// // alert(frutas[1].nome)

// // var fruta = {nome:"maça", cor:"vermelha"}
// // console.log(fruta.nome)
// // // alert(fruta.cor)

// // // var lista = ["maça", "perâ", "laranja"]
// // // lista.push("uva")
// // // //console.log(lista)
// // // //console.log(lista.length)
// // // //console.log(lista.reverse())
// // // console.log(lista.toString())
// // // console.log(lista.join(" - "))

// // // /*
// // // var nome = "Alex Ronny"
// // // var n1 = 5
// // // var n2 = 3
// // // var frase = "Japão é o melhor time do mundo"
// // // //alert(nome + " tem " + idade + " anos")
// // // //alert(idade + idade2)
// // // console.log(nome)
// // // console.log(n1 * n2)
// // // console.log(frase.toLowerCase())
// // // //alert(frase.replace("Japão","Brasil"))
// // // */
