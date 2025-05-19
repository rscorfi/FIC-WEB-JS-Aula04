/* 13. Um trabalhador recebe R$ 1.500,00 por mês e 
trabalha 8 horas por dia, 22 dias por mês. 
Calcule o valor recebido por hora trabalhada. */

let salarioMensal = 1500
let horasTrabalhadasDia = 8
let diasTrabalhoMensal = 22

let horasTrabalhadasMes = horasTrabalhadasDia * diasTrabalhoMensal
console.log(`Horas trabalhadas por mês: ${horasTrabalhadasMes}`)

let valorHora = salarioMensal / horasTrabalhadasMes
console.log(`Valor da hora trabalhada: ${valorHora.toFixed(2)}`)