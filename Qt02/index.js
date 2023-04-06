/*
Crie uma função em JavaScript que receba como parâmetro um número inteiro e retorne a 
soma de todos os números ímpares entre 0 e o número informado. Por exemplo, se o número 
informado for 10, a função deve retornar 25 (1 + 3 + 5 + 7 + 9).
 */

function somaImpares(number) {
  let soma = 0;

  for (let i = 0; i <= number; i++) {
    if (i % 2 == 1) {
      soma += i;
    }
  }

  return soma;
}

//Informe um número na função
console.log(somaImpares(20));

//Por exemplo:
/*
console.log(somaImpares(10))

Resultado no terminal: 25
 */
