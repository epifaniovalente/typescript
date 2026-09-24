// ========= TUPLAS ============

type Calendario = [day: number, month: number, year: number];

const data: Calendario = [34, 7, 4];

// Para desestrututar ela numa função tipada, recomenda-se utilizar nomes nas posições dos elementos das tuplas
const date: Calendario = [29, 9, 2020];

function criarData(dat: Calendario) {
  const [] = dat;
}

criarData([12, 34, 5]);

// ================ ENUMS / ENUMERATIONS =====================

enum Direcoes {
  Nort = 1,
  Sul,
  Este,
  Oeste,
}

const posicao = {
  x: 412,
  y: 224,
  direcao: Direcoes.Sul,
};

// ===== ENUMS COM VALORES STRING =======

enum TamanhosRoupas {
  ExtraSmall = 'PP',
  Small = 'P',
  Medium = 'M',
  Large = 'G',
  ExtraLarge = 'GG',
}

const roupa = {
  color: 'green',
  size: TamanhosRoupas.Large,
};

console.log(roupa);

// ============ EX

enum StyleBtn {
  Green,
  Blue,
  Red,
  Gray,
}

interface Button {
  label: string;
  emoji: string;
  style: StyleBtn;
}

const button: Button = {
  label: 'Login',
  emoji: '',
  style: StyleBtn.Green,
};
