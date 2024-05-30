export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}


export const products: IProduct[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
    image: './products/expresso.png',
    tags: ['Tradicional']
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
    image: './products/americano.png',
    tags: ['Tradicional']
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
    image: './products/expresso-cremoso.png',
    tags: ['Tradicional']
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
    image: './products/cafe-gelado.png',
    tags: ['Tradicional', 'Gelado']
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
    image: './products/cafe-com-leite.png',
    tags: ['Tradicional', 'Com Leite']
  },
  {
    id: 6,
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
    image: './products/latte.png',
    tags: ['Tradicional', 'Com Leite']
  },
  {
    id: 7,
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
    image: './products/capuccino.png',
    tags: ['tradicional', 'Com Leite']
  },
  {
    id: 8,
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
    image: './products/macchiato.png',
    tags: ['Tradicional', 'Com Leite']
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
    image: './products/mocaccino.png',
    tags: ['Tradicional', 'Com Leite']
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
    image: './products/chocolate-quente.png',
    tags: ['Especial', 'Com Leite']
  },
  {
    id: 11,
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
    image: './products/cubano.png',
    tags: ['Especial', 'Alcoólico', 'Gelado']
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
    image: './products/havaiano.png',
    tags: ['Especial']
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
    image: './products/arabe.png',
    tags: ['Especial']
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
    image: './products/irlandes.png',
    tags: ['Especial', 'Alcoólico']
  },
]
