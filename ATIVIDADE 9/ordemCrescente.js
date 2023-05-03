function ordemCrescente(num1, num2, num3)
{
  let arrayNumeros = [num1, num2, num3];
  arrayNumeros.sort(function (a, b) {
    return a - b;
  });
  return arrayNumeros;
}
