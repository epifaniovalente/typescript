// Ex. 01
type EstadoCarregamento =
  | { status: 'Loading' }
  | { status: 'sucesso'; dados: string[] }
  | { status: 'Erro'; message: string };

function exibirEstado(estado: EstadoCarregamento) {
  switch (estado.status) {
    case 'Loading':
      console.log('Carregando, aguarde...');
      break;
    case 'sucesso':
      console.log('Carregado com sucesso!');
      break;
    case 'Erro':
      console.log('Houve algum erro!');
      break;

    default:
      () => {
        throw new Error('Status não identificado');
      };
      break;
  }
}

// Ex. 02 - Sistema simples de usuários

interface Usuario {
  readonly id: number;
  nome: string;
  email: string;
  activo: boolean;
}

type CreateUser = Omit<Usuario, 'id'>;

const User01: CreateUser = {
  nome: 'user01',
  email: 'useremail.com',
  activo: false,
};




// Ex. 03

type produtos =[]