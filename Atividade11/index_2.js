function Conta(nomeCorrentista, banco, numeroConta, saldo) {
  this.nomeCorrentista = nomeCorrentista;
  this.banco = banco;
  this.numeroConta = numeroConta;
  this.saldo = saldo;
}

function CorrenteComSaldoEspecial(nomeCorrentista, banco, numeroConta, saldo, limite) {
  Conta.call(this, nomeCorrentista, banco, numeroConta, saldo);
  this.limite = limite;
}

Co4rrenteComSaldoEspecial.prototype = Object.create(Conta.prototype);
CorrenteComSaldoEspecial.prototype.constructor = CorrenteComSaldoEspecial;

function PoupancaComJuros(nomeCorrentista, banco, numeroConta, saldo, dataVencimento) {
  Conta.call(this, nomeCorrentista, banco, numeroConta, saldo);
  this.dataVencimento = dataVencimento;
}

PoupancaComJuros.prototype = Object.create(Conta.prototype);
PoupancaComJuros.prototype.constructor = PoupancaComJuros;

const conta = new Conta('João', 'Banco X', '123456', 1000);
console.log(conta.nomeCorrentista);

const correnteComSaldoEspecial = new CorrenteComSaldoEspecial('Maria', 'Banco Y', '654321', 5000, 1000);
console.log(correnteComSaldoEspecial.limite);

const poupancaComJuros = new PoupancaComJuros('José', 'Banco Z', '987654', 2000, '01/01/2024');
console.log(poupancaComJuros.dataVencimento);
