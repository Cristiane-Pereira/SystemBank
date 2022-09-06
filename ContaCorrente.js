import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  static numeroDeContas = 0;
  agencia;

  _cliente;
  _saldo;

  // acessores usados para encapsular atibutos e proteger a maneira de entrada e saida dos dados(getters & setters)
  set cliente(novoValor) { //acessores sempre rem que ser atibutos públicos, referenciando o atibuto privado do objeto.
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }
  get cliente() {
    return this._cliente;
  }
  get saldo() {
    return this._saldo;
  }

  
  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    } else {
      ("Seu saldo é insuficiente.");
    }
  }
  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }
  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }

  constructor() {
    ContaCorrente.numeroDeContas +=1
  }
}
