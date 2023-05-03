function Retangulo(base, altura) {
  this.base = base;
  this.altura = altura;
  this.calcularArea = function() {
    return this.base * this.altura;
  }
}

const retangulo = new Retangulo(5, 10);
console.log(retangulo.calcularArea());
