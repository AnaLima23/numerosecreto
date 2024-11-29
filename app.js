 let tentativas = 1
 let jogada
 alert('Boas vindas ao jogo do número secreto')
 let NomeJogador = prompt("Qual seu nome?")
 let numQuant= prompt ("Devo sortear um número de 0 a quanto?")
 let numeroSecreto = parseInt(Math.random() * numQuant+1)
 while (jogada != numeroSecreto) {
     let jogada = prompt(`Escolha um número entre 0 e ${numQuant}`)
     if (jogada == numeroSecreto) {
         break
     } else {
         if (jogada > numeroSecreto) {
             alert('O número secreto é menor')
         } else {
             alert('O número secreto é maior')
         }
     }
     tentativas++
 }

    let palavra = tentativas > 1 ? 'tentativas' : 'tentativa' 
 alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavra}`)




 