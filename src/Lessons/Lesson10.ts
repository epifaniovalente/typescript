// ============ Discriminated Unions - Uniões Descriminadas =============
type Sucesso = {
  status: 'Sucesso';
  dados: string[];
};

type Erro = {
  status: 'Erro';
  message: string;
  codigo: number;
};

type Carregando = {
  status: 'Carregando';
};

type Estado = Sucesso | Erro | Carregando;
function tratarEstado(estado: Estado) {
  switch (estado.status) {
    case 'Sucesso':
      console.log(estado.dados);
      break;
    case 'Erro':
      console.log(estado.message, estado.codigo);
      break;
    case 'Carregando':
      console.log(estado.status);
      break;

    // default:
    //   break;
  }
}

// Exemplo pratico de notificações

type Notificacoes =
  | { tipo: 'email'; destinatario: string; assunto: string }
  | { tipo: 'sms'; menssagem: string; telefone: number }
  | { tipo: 'push'; titulo: string; corpo: string };

function enviarNotificacao(notificar: Notificacoes) {
  switch (notificar.tipo) {
    case 'email':
      console.log(`email para ${notificar.destinatario}: ${notificar.assunto}`);
      break;
    case 'sms':
      console.log(`SMS para ${notificar.telefone}: ${notificar.menssagem}`);
      break;
    case 'push':
      console.log(`Push para ${notificar.titulo}: ${notificar.corpo}`);
      break;

    // default:
    //   break;
  }
}
