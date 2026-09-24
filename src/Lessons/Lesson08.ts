// =========== Types Generics / Tipos Genéricos =============

// import type { UUID } from 'crypto';

function identidade<T>(valor: T): T {
  return valor;
}
identidade<number>(34);
identidade<string>('Fortunato');
// usando inferencia
identidade(true);

// Generics em Arrays e Funções

function primeiroElemento<T>(arr: T[]): T | undefined {
  return arr[0];
}
const numeros = primeiroElemento([12, 34, 75, 97]);
const nomes = primeiroElemento(['Zeca', 'Moniz', 'Lúcio']);

function ultimoElemento<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

// Generics em Interface e Types

interface RespostaAPI<T> {
  data: T;
  sucesso: boolean;
  message?: string;
}

type Usuario = {
  id: number;
  nome: string;
};

export const respostaUsuario: RespostaAPI<Usuario> = {
  data: { id: 97, nome: 'Zito' },
  sucesso: true,
};

export const respostaNumeros: RespostaAPI<number[]> = {
  data: [12, 64, 97],
  sucesso: true,
  message: 'Nenhum erro Ocorrido',
};

// Generics em Classes

class Caixa<T> {
  private conteudo: T;
  constructor(valor: T) {
    this.conteudo = valor;
  }

  pegar(): T {
    return this.conteudo;
  }

  guardar(novoValor: T): void {
    this.conteudo = novoValor;
  }
}

export const caixaString = new Caixa<string>('Olá, Usuario');
console.log(caixaString);

// usando inferencia
export const caixaNumero = new Caixa(297);

// =========EXEMPLO PRATICO DE FILTRO ===========

function filtror<T>(lista: T[], predicado: (item: T) => boolean): T[] {
  return lista.filter(predicado);
}

const numer = [85, 97, 39, 51, 44];
export const pares = filtror(numer, (n) => n % 2 == 0);


const noms=['Zeca','Tarciso','Fortunato']
export const terminaComO=filtror(noms,(n)=>n.endsWith('o'))
console.log(terminaComO);

