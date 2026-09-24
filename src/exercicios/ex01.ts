// UMA TYPE CHAMADO "ROLE" QUE SO ACEITE 'Admin', 'Editor','Viwer'

type Role = 'Admin' | 'Editor' | 'Viwer';

// CRIAR UMA INTERFACE CHAMADA "USUARIO" CONTENDO: Id,Nome,Email,Cargo(do tipo Role), Bibliografia(opcional)

interface Usuario {
  id: number;
  nome: string;
  email: string;
  cargo: Role;
  bibliografia?: string;
}

export function createUser(
  id: number,
  nome: string,
  email: string,
  cargo: Role,
  bio?: string
): Usuario {
  return { id, nome, cargo, email };
}

createUser(12, 'Adão', 'adao@gmail.com', 'Admin', 'Estudante de Informática');

// CRIAR UMA FUNÇÃO CHAMADA formatarSaudacao QUE RECEBA (nome,titulo(opcional -ex.:Sr/Dra), caixaAlta(boolean, opcional, padrao false))

export function formatarSaudacao(
  nome: string,
  titulo?: string,
  caixaAlta: boolean = false
) {
  if (titulo && caixaAlta) {
    console.log('Ola ', titulo.toUpperCase(), ' ', nome.toUpperCase());
  } else if (titulo) {
    console.log('Ola ', titulo, ' ', nome);
  } else if (!titulo && !caixaAlta) {
    console.log('Ola ', nome);
  } else if (caixaAlta && !titulo) {
    console.log('Ola ', nome.toUpperCase());
  }
}

// CRIA UMA FUNCAO CHAMADA renderizarStatus QUE RECEBA 3 PARAMETROS STATUS RESTRITO A 'Loading','Sucess','Error'

type STATUS = 'Laoding' | 'Sucess' | 'Error';

export function renderizarStatus(status: STATUS) {
  switch (status) {
    case "Laoding":
      console.log('Carregando Informação, Aguarde...');
      break;
  case "Error":
    console.log("Algo deu errado, tente novamente");
    break
    case "Sucess":
      console.log("Pagina carregada com sucesso");
      break
    default:
      console.log("Status não identificado");
      break;
  }
}
