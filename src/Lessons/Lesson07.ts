// ========= Type Guards ========

// TypeOf
export function formatarValor(valor: string | number) {
  if (typeof valor == 'number') {
    return valor.toFixed(2);
  }
  return valor.toUpperCase();
}

formatarValor(6350);

// com classes Usamos instaceof

class Dog {
  latir() {
    console.log('aua au');
  }
}

class Gato {
  miar() {
    console.log('Miau');
  }
}

export type Animal = Dog | Gato;

export function fazerSom(animal: Animal) {
  if (animal instanceof Dog) {
    animal.latir();
  } else {
    animal.miar();
  }
}

// Usando `in´ operator

type Carro = {
  marca: string;
  acelerar: () => void;
};

type Barco = {
  nome: string;
  navegar: () => void;
};

function mover(movel: Carro | Barco) {
  if ('acelerar' in movel) {
    return movel.marca;
  } else {
    return movel.nome;
  }
}

// ======= Usando type predicate =========

type Sucesso = {
  status: 'Sucesso';
  daddos: string[];
};

type Erro = {
  status: 'Erro';
  message: string;
};

type Resposta = Sucesso | Erro;

function isSuceso(resp: Resposta): resp is Sucesso {
  return resp.status == 'Sucesso';
}

function ProcessarResposta(resposta: Resposta) {
  if (isSuceso(resposta)) {
    console.log(resposta.daddos);
  } else {
    console.log(resposta.message);
  }
}



