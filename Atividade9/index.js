function maiorNumero(num1, num2, num3) {
  let maior = num1;
  if (num2 > maior) {
    maior = num2;
  }
  if (num3 > maior) {
    maior = num3;
  }
  return maior;
}

function ordemCrescente(num1, num2, num3)
{
  let arrayNumeros = [num1, num2, num3];
  arrayNumeros.sort(function (a, b) {
    return a - b;
  });
  return arrayNumeros;
}
