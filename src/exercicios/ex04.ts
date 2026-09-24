interface Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
  categoria: string;
  descricao?: string;
}

// Atualizando (Tudo opcional menos o Id)
type upProduto = Partial<Omit<Produto, 'id'> & { id: number }>;

// Resumo
type ProdResumo = Pick<Produto, 'id' | 'nome' | 'preco'>;

// Descricao
type ProdReq = Required<Produto>;

// Estoque por Categoria

type Categoria = 'Eletronico' | 'Livros' | 'Roupas';
type stockCat = Record<Categoria, number>;

const stock: stockCat = {
  Eletronico: 3497,
  Livros: 350,
  Roupas: 9740,
};
