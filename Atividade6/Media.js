var nome = prompt("Nome do aluno");
var media = function () {
    let nota1 = prompt("primeira nota");
    let nota2 = prompt("segunda nota");
    let nota3 = prompt("terceira nota");
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);
    return ((nota1 + nota2 + nota3) / 3);
}
alert("Média aritmetica total = " + media());