//  Ex.:> CRIARA UM SISTEMA SISMPLES DE PEDIDO

type StatusPedido = 'pendente' | 'pago' | 'enviado' | 'entregue' | 'cancelado';

interface ItemPedido {
  id: number;
  nome: string;
  quantidade: number;
  precoUnitario: number;
}

interface Pedido {
  id: number;
  cliente: string;
  itens: ItemPedido[];
  status: StatusPedido;
  dataCriacao: Date;
  total?: number;
}

const pedido1: Pedido = {
  id: 102,
  cliente: 'Lúcio Fortunato',
  itens: [
    { id: 85, nome: 'Teclado', quantidade: 3, precoUnitario: 7600 },
    { id: 85, nome: 'Mouse', quantidade: 1, precoUnitario: 2990 },
  ],
  status: 'pago',
  dataCriacao: new Date(),
};

// Ex de Fixação.:

interface Livro {
  titulo: string;
  autor: string;
  ano: number;
  paginas?: number;
  readonly origem: string;
}

type Disponibilidade = 'emprestado' | 'disponivel' | 'manutenção';

interface BibliotecaLivro extends Livro {
  status: Disponibilidade;
  localizacao: string;
}

const ConsultarLivro: BibliotecaLivro = {
  autor: pedido1.cliente,
  ano: 2023,
  origem: 'Angolana',
  localizacao: 'Simeone',
  paginas: 284,
  titulo: 'O vagabundo da rua 14',
  status: 'disponivel',
};
