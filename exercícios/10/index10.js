// 10. Calcule o valor total de uma compra com 3 produtos:
// Produto 1: R$ 45,00
// Produto 2: R$ 30,00
// Produto 3: R$ 25,00
// Adicione 10% de imposto ao valor total.

let produto1 = 45
let produto2 = 30
let produto3 = 25

let valorProdutos = produto1 + produto2 + produto3
console.log(`Valor dos produtos: R$ ${valorProdutos}`)

let desconto = valorProdutos * 0.1
console.log(`Desconto: R$ ${desconto}`)

let totalCompra = valorProdutos - desconto
console.log(`Valor total à pagar: R$ ${totalCompra}`)
