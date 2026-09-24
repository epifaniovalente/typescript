// ======== Classes =========

abstract class Forma {
  abstract calcularArea(): number;

  descrever(): string {
    return `Area:${this.calcularArea()}`;
  }
}

class Circulo extends Forma {
  constructor(public raio: number) {
    super();
  }

  calcularArea(): number {
    return Math.PI * this.raio ** 2;
  }
}

export const circ = new Circulo(37).descrever()

// ## Implements

 