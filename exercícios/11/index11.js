// 11. Um investidor aplicou R$ 1.000,00 em uma poupança com rendimento de 0,5% ao
// mês. Calcule o valor total após 6 meses.

let aplicacaoInicial = 1000
let rendimentoMensal = 0.005
let redimento
let tempoAplicadoMeses = 6
let i
let valorAtualizado = aplicacaoInicial

for (i = 0 ; i < tempoAplicadoMeses; i++){
    console.log(`Rendimento do mês ${i+1}: ${valorAtualizado.toFixed(0) * rendimentoMensal.toFixed(2)}`)
    valorAtualizado = valorAtualizado + (valorAtualizado * rendimentoMensal)
    console.log(`Total aplicado mês ${i+1}: ${valorAtualizado.toFixed(2)}`)
}