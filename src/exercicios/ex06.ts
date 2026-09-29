// =========== Classes =============

interface Publicavel {
  publicar(): void;
}

abstract class Conteudo {
  constructor(
    public titulo: string,
    protected autor: string
  ) {}

  abstract resumo(): string;
}

class Artigo extends Conteudo implements Publicavel {
  constructor(
    titulo: string,
    autor: string,
    private texto: string,
    private publicado: boolean
  ) {
    super(titulo, autor);
  }

  resumo(): string {
    return this.texto.slice(0, 80) + '...';
  }

  publicar(): void {
    this.publicado = true;
    console.log(`Artigo ${this.titulo} publicado por ${this.autor}`);
  }
}

// ## EXERCICIO PRATICO

class Veiculo {
  constructor(
    public marca: string,
    public modelo: string,
    private velocidade: number = 0
  ) {}

  public set acelerar(v: number) {
    this.velocidade += v;
  }

  public set frear(v: number) {
    this.velocidade = Math.max(0, this.velocidade - v);
  }

  public get getVelocidade():number {
    return this.velocidade;
  }
}

class Carro extends Veiculo {
  constructor(
    public marca: string,
    public modelo: string,
    public portas: number
  ) {
    super(marca, modelo);
  }

  buzinar(): void {
    console.log('pii pii');
  }
}

const meuRuca = new Carro('Toyota','Hilux',4)
meuRuca.acelerar=97
console.log(meuRuca.getVelocidade);
meuRuca.buzinar()