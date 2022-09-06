import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
const contaCorrente1 = new ContaCorrente();
cliente1.nome = "Ricardo";
cliente1.cpf = 12345667890;
contaCorrente1.agencia = 1001;
contaCorrente1.cliente = cliente1;
contaCorrente1._saldo = 300;
contaCorrente1.depositar(500);
contaCorrente1.sacar(100);

const cliente2 = new Cliente();
const contaCorrente2 = new ContaCorrente();
cliente2.nome = "Alice";
cliente2._cpf = 90845667860;
contaCorrente2.agencia = 1001;
contaCorrente2.cliente = cliente2;
contaCorrente2._saldo = 0;
const valorSacado = contaCorrente2.sacar(100);

// const cliente3 = new Cliente("Geovanna", 49045678921)

contaCorrente1.transferir(200, contaCorrente2);

console.log(contaCorrente1);
console.log(contaCorrente2._cliente);
console.log("Número de contas:" + ContaCorrente.numeroDeContas)
