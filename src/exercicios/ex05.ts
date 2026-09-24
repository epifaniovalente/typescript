type forma =
  | { tipo: 'circulo'; raio: number }
  | { tipo: 'retangulo'; largura: number; altura: number }
  | { tipo: 'triangulo'; base: number; altura: number };

function calcArea(area: forma) {
  switch (area.tipo) {
    case 'circulo':
      return Math.PI * area.raio ** 2;
    case 'retangulo':
      return area.largura * area.altura;
    case 'triangulo':
      return (area.base * area.altura) / 2;
    default:
      break;
  }
}
