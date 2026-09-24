// Exercicico de fixação - Type Gards Usando type predicate

// Admin
type UsuarioAdmin = {
  tipo: 'admin';
  nome: string;
  permissoe: string[];
};

// Usuario Normal

type UsuarioComum = {
  tipo: 'Commum';
  nome: string;
  email: string;
};

type Usuario = UsuarioAdmin | UsuarioComum;

function isAdmin(user: Usuario): user is UsuarioAdmin {
  return user.tipo == 'admin';
}

function verifyUser(user: Usuario) {
  if (isAdmin(user)) {
    console.log(`Admin: ${user.nome}`);
  } else {
    console.log(`Usuario: ${user.nome}`);
  }
}

const cliente: UsuarioComum = {
  nome: 'Osvaldo',
  email: 'osvaldocliente@gmail.com',
  tipo: 'Commum',
};

verifyUser(cliente);

// ----------------------------------------------------

type Resultado =
  | {
      sucess: true;
      valor: number;
    }
  | { sucess: false; erro: string };

function isSucess(
  result: Resultado
): result is { sucess: true; valor: number } {
  return result.sucess == true;
}

function processarResultado(resultado: Resultado) {
  if (isSucess(resultado)) {
    console.log(resultado.valor * 2);
  } else {
    console.log(resultado.erro);
  }
}

// Testando

processarResultado({ sucess: true, valor: 54 });
processarResultado({ sucess: false, erro: 'Falhou' });
