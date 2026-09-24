// =========== Utility Types ===============

// ## Partial<T>

interface Usuario {
  id: number;
  nome: string;
  email: string;
  idade: number;
}

type UserParial = Partial<Usuario>;

function atualizarUser(id: number, dados: Partial<Usuario>) {}

atualizarUser(14, {
  id: 23,
  email: 'userTest@gmail.com',
  idade: 87,
  nome: 'user',
});

// ## Required

interface Configuracao {
  tema?: string;
  idioma?: string;
  notificacao?: boolean;
}

type configFull = Required<Configuracao>;

const config: configFull = {
  idioma: 'pt-ao',
  notificacao: true,
  tema: 'dark',
};

// ## Readonly

interface Produto {
  id: number;
  nome: string;
  preco: number;
}
type ProdCongelado = Readonly<Produto>;

const produto: ProdCongelado = {
  id: 45,
  nome: 'Teclado',
  preco: 7450,
};

// produto.nome='SSD'

// ## Pick<T,K>

type UserPublic = Pick<Usuario, 'nome' | 'email'>;

const client: UserPublic = {
  nome: 'Cliente Test',
  email: 'cliente@email.com',
};

// ## Omit<T,K>

// interface Objecto {
//   cor: string;
//   forma: string;
//   funciona: boolean;
// }

// type UserSemEmail = Omit<Objecto, 'cor'>;

// ## Records<K,T>

type Roles = 'Admin' | 'Editor' | 'Viewer';

type permissao = Record<Roles, string[]>;

const perm: permissao = {
  Admin: [''],
  Editor: [''],
  Viewer: [''],
};
