import { IProduct } from "../../reducers/cart/reducer";

import expresso from '/products/expresso.png';
import americano from '/products/americano.png';
import expressoCremoso from '/products/expresso-cremoso.png';
import cafeGelado from '/products/cafe-gelado.png';
import cafeComLeite from '/products/cafe-com-leite.png';
import latte from '/products/latte.png';
import capuccino from '/products/capuccino.png';
import macchiato from '/products/macchiato.png';
import mocaccino from '/products/mocaccino.png';
import chocolateQuente from '/products/chocolate-quente.png';
import cubano from '/products/cubano.png';
import havaiano from '/products/havaiano.png';
import arabe from '/products/arabe.png';
import irlandes from '/products/irlandes.png';

export const products: IProduct[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
    image: expresso,
    tags: ['Tradicional'],
    quantity: 0
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
    image: americano,
    tags: ['Tradicional'],
    quantity: 0
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
    image: expressoCremoso,
    tags: ['Tradicional'],
    quantity: 0
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
    image: cafeGelado,
    tags: ['Tradicional', 'Gelado'],
    quantity: 0
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
    image: cafeComLeite,
    tags: ['Tradicional', 'Com Leite'],
    quantity: 0
  },
  {
    id: 6,
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
    image: latte,
    tags: ['Tradicional', 'Com Leite'],
    quantity: 0
  },
  {
    id: 7,
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
    image: capuccino,
    tags: ['tradicional', 'Com Leite'],
    quantity: 0
  },
  {
    id: 8,
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
    image: macchiato,
    tags: ['Tradicional', 'Com Leite'],
    quantity: 0
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
    image: mocaccino,
    tags: ['Tradicional', 'Com Leite'],
    quantity: 0
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
    image: chocolateQuente,
    tags: ['Especial', 'Com Leite'],
    quantity: 0
  },
  {
    id: 11,
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
    image: cubano,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    quantity: 0
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
    image: havaiano,
    tags: ['Especial'],
    quantity: 0
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
    image: arabe,
    tags: ['Especial'],
    quantity: 0
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
    image: irlandes,
    tags: ['Especial', 'Alcoólico'],
    quantity: 0
  },
]
