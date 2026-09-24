// interface verOpcoes {
//   verDia?: boolean;
//   verMes?: boolean;
//   verAno?: boolean;
// }

import { createUser, formatarSaudacao, renderizarStatus } from './exercicios/ex01.js';
import { createProduto } from './Lessons/Aula03.js';
import { fazerSom, formatarValor, type Animal } from './Lessons/Lesson07.js';
import { pares, respostaNumeros, respostaUsuario, terminaComO } from './Lessons/Lesson08.js';
import { circ } from './Lessons/Lesson11.js';

// function verOpcoesCalend(date: Date, opcoes: verOpcoes = {}) {
//   console.log(date.toLocaleString());
//   if (opcoes.verDia) {
//     console.log('dia:', date.getDay());
//   }
//   if (opcoes.verMes) {
//     console.log('Mês:', date.getMonth());
//   }
//   if (opcoes.verAno) {
//     console.log('Ano:', date.getFullYear());
//   }
// }
// verOpcoesCalend(new Date(), { verDia: true });

//types assertions

// const inputNome = document.getElementById('nome') as HTMLInputElement;
// inputNome.value = 'Olá, mundo!';

// const config = {
//   endPoint: 'https://api.com',
//   porta: 8080,
// } as const;

// config.porta = 90

// NON-NULL ASSERTION OPERATOR
// function processarTexto(texto?: string) {
//   const tamanho = texto!.length;
//   console.log(tamanho);
// }
//processarTexto(234);
// parameter of type 'string | undefined'.
// processarTexto('Ola, Mundo');

// Operador Satisfies

// type tema = {
//   cor: string | number[];
// };
// const temaEscuro = {
//   cor: '#000',
// } satisfies tema;
// console.log(temaEscuro.cor.toLocaleUpperCase());

/*======= EXERCICIO DE FIXAÇÃO =======*/
// 1. Corrija esta função declarando o tipo dos parâmetros e do retorno.
// Ela recebe um valor numérico e um nome, e deve retornar uma string formatada.
// function formatarSaldo(valor, usuario) {
//   return `O usuário ${usuario} possui $${valor.toFixed(2)}`;
// }
// function formatarSlado(valor: number, usuario: string) {
//   console.log(`O saldo de ${usuario} corresponde à : ${valor}`);
// }

// formatarSlado(420.7, 'Epifânio');

// 2. Garanta que a tupla 'posicao' aceite apenas exatamente 2 números (latitude e longitude)
// type posicao = [number, number];
// let x: posicao = [-8.8383, 13.2344];

// 3. Utilize o tipo seguro correto (ao invés de any) para esta variável
// e faça o 'Type Narrowing' com typeof para conseguir exibir em caixa alta apenas se for string.
// let entradaDoUsuario: unknown = 'dados_do_formulario';

// if (typeof entradaDoUsuario === 'string') {
//   console.log(entradaDoUsuario.toUpperCase());
// }

// 4. Defina este objeto como imutável para que ninguém consiga alterar o 'env'
// const appConfig = {
//   env: "production",
//   port: 3000
// }as const;

// TYPES UNIONS


function buscarUser(id: string | number) {
  if (typeof id === 'string') {
    console.log(`Buscar por texto: ${id.toLowerCase()}`);
  } else {
    console.log(`Buscar por id: ${id}`);
  }
}
buscarUser(240);
buscarUser('lucio');

console.log('Novo Usuario criado:',
  createUser(
    18,
    'Marcia',
    'marcia@gmail.com',
    'Editor',
    'Estudante de informatica'
  )
);

formatarSaudacao('pingadas','',true)

// renderizarStatus('Error')
// renderizarStatus('Laoding')
renderizarStatus('Sucess')

console.log(createProduto(234,'Laptop',184000))

console.log(formatarValor(39269))


console.log(pares);
console.log(terminaComO);
console.log(respostaUsuario.data);
console.log(respostaNumeros.message);

console.log(circ)