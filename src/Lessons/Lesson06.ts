// ^=========== UNION TYPES =============

type ID = number | string;

let userId: ID;
userId = 56;
userId = 'abc-123';

type Status = 'ativo' | 'inativo' | 'pendente';

let statusUsuario: Status = 'ativo';

// USNADO types Union em objectos

type Sucesso = {
  status: 'Sucesso';
  dados: string[];
};

type Erro = {
  status: 'Erro';
  menssagem: string;
};

type Resposta = Sucesso | Erro;


