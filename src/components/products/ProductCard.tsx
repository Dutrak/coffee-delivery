import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { IProduct } from "../../reducers/cart/reducer";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export interface ProductProps {
  product: IProduct;
}

export function ProductCard({ product }: ProductProps) {

  const cartContext = useContext(CartContext)
  const { addToCart, removeFromCart, cartState } = cartContext;

  const productAlreadyInCart = cartState.find(productCart => productCart.id === product.id);


  function handleAddToCart() {
    addToCart(product);
  }

  function handleRemoveFromCart() {
    removeFromCart(product);
  }

  return (
    <div key={product.id} className="flex flex-col px-5 w-64 pb-5 bg-base-card rounded-es-[36px] rounded-se-[36px] rounded-ee-md rounded-ss-md">
      <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-full -mt-5 mb-3 self-center" />
      <div className="flex gap-0.5 mb-4 self-center">
        {product.tags.map((tag) => {
          return (
            <div className="h-5 bg-yellow-light flex items-center justify-center rounded-[100px]" key={tag}>
              <p className="text-[10px] text-center py-0.5 px-2 font-bold leading-snug text-yellow-dark">{tag.toUpperCase()}</p>
            </div>
          )
        })}
      </div>
      <h2 className="font-baloo2 font-bold text-xl leading-snug text-base-subtitle self-center">{product.name}</h2>
      <p className="text-sm leading-snug text-center mt-2 text-base-label">{product.description}</p>
      <div className="flex text-base-text mt-8 gap-6">
        <div className="flex items-baseline">
          <span className="text-sm leading-snug h-full mr-0.5">R$</span>
          <span className="font-baloo2 leading-snug text-2xl font-extrabold">{product.price.toFixed(2).replace('.', ',')}</span>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex gap-2 bg-base-button items-center justify-center rounded-md w-[5rem] h-9 px-2 py-3">
            <Minus size={14} className="text-purple cursor-pointer hover:text-purple-dark transition-all" onClick={handleRemoveFromCart} />
            <span className="text-base leading-snug text-base-title cursor-default select-none">{
              productAlreadyInCart ? productAlreadyInCart.quantity : 0
            }</span>
            <Plus size={14} className="text-purple cursor-pointer  hover:text-purple-dark transition-all" onClick={handleAddToCart} />
          </div>
          <div>
            <div className="bg-purple-dark w-9 h-9 rounded-md flex items-center justify-center cursor-pointer hover:bg-purple transition-all">
              <span className="text-base-card"><ShoppingCart size={22} weight="fill" onClick={handleAddToCart} /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}