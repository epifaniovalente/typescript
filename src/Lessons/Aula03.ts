// ======= Types Alias - Apelidos de tipos

type Apilido = string | number | string[];

function prompt(digite: Apilido) {}

prompt(23);

type User = {
  name: string;
  createdAt: Date;
  wallet?: {
    creditos?: number;
  };
};

type Admin = User & {
  ban(): void;
};

interface Produto {
  readonly id: number;
  nome: string;
  preco: number;
}

export function createProduto(
  id: number,
  nome: string,
  preco: number
): Produto {
  return { id, nome, preco };
}

