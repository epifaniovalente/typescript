// Type Anotation - Anotaçoes de Tipos

const myName: string = 'Zeca';
const myNumber: number = 8914;
const myBoolean: boolean = true;

function somar(n1: number, n2: number): number {
  return n1 + n2;
}

somar(75, 98);

function greet(name: string, isStudent: boolean, age?: number) {
  console.log('Ola, ', name);
}

greet('Salomao', true);

const profissao = 'Programador';
profissao.concat('Web');

const animal = {
  name: 'gato',
  age: 64,
};

console.log(
  'Meu animal é: ',
  animal.name.lastIndexOf,
  ' tem: ',
  animal.age.toExponential(),
  ' idade'
);

const filtro = (value: number) => value >= 36;
const alunos = [12, 35, 30, 62];
alunos.filter(filtro);
