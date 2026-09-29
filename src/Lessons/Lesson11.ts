// ======== Classes =========

class ContaBancaria {
  readonly numero: number;
  private saldo: number;
  protected titular: string;

  constructor(numero: number, titular: string, saldoInicial: number) {
    this.numero = numero;
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    if (valor <= 0) return;
    this.saldo += valor;
  }

  levantar(valor: number): boolean {
    if (valor <= 0 || valor > this.saldo) return false;
    this.saldo -= valor;
    return true;
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}

const conta = new ContaBancaria(233300, 'Lúcio Fortunato', 20000);

conta.depositar(14000);
console.log(conta.consultarSaldo());

// ## Classes Abstratas
abstract class Forma {
  abstract calcularArea(): number;

  descrever(): string {
    return `Area:${this.calcularArea()}`;
  }
}

class Circulo extends Forma {
  constructor(public raio: number) {
    super();
  }

  calcularArea(): number {
    return Math.PI * this.raio ** 2;
  }
}

export const circ = new Circulo(37).descrever();

// ## Implements

interface Autenticavel {
  email: string;
  autenticar(senha: string): boolean;
}

class Admin implements Autenticavel {
  constructor(
    public email: string,
    private password: string
  ) {}

  autenticar(senha: string): boolean {
    return senha === this.password;
  }
}

// Uma class pode implementar varias interfaces
interface LogadoUser {
  log(): void;
}

class UserFull implements LogadoUser, Autenticavel {
  constructor(
    public email: string,
    private password: string
  ) {}

  autenticar(senha: string): boolean {
    return senha === this.password;
  }

  log(): void {
    console.log(`User: ${this.email}`);
  }
}

// ## Getters & Setters

class Pessoa {
  private _idade: number = 0;

  public get verIdade(): number {
    return this._idade;
  }

  public set DefinirIdade(v: number) {
    if (v <= 0 || v > 150) {
      throw new Error('Idade invalida');
    }
    this._idade = v;
  }
}

const pessoa =new Pessoa()
pessoa.DefinirIdade=17
pessoa.verIdade
