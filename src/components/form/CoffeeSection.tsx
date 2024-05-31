import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ShoppingCart, Minus, Plus, Trash } from "phosphor-react";
import { IProduct } from "../../reducers/cart/reducer";

export function CoffeeSection() {

  const cartContext = useContext(CartContext);

  const { cartState, addToCart, removeFromCart, deleteFromCart } = cartContext;

  const orderFee = 3.50;
  const totalValueInCart = cartState.reduce((acc, item) => acc + item.price * item.quantity, 0)

  function handleAddToCart(product: IProduct) {
    return () => {
      addToCart(product);
    }
  }

  function handleRemoveFromCart(product: IProduct) {
    return () => {
      removeFromCart(product);
    }
  }

  function handleDeleteFromCart(product: IProduct) {
    return () => {
      console.log(product)
      deleteFromCart(product);
    }
  }


  return (
    <section className="flex flex-col gap-4 w-full">
      <h1 className="font-baloo2 font-bold leading-snug text-lg text-base-subtitle">Cafés selecionados</h1>
      <div className="bg-base-card p-10 rounded-md">
        {
          cartState.length > 0 ? (

            <div className="flex flex-col gap-6">
              {cartState.map((item) => {
                return (
                  <div key={item.id} className="flex flex-col w-full pb-6 border-b-2 border-base-button ">
                    <div className="flex gap-5 w-full px-1 py-2">
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md" />
                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex justify-between">
                          <h1 className="text-base text-base-subtitle leading-snug">{item.name}</h1>
                          <p className="text-base text-base-text leading-snug font-bold">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                        </div>
                        <div className="flex gap-2">

                          <div className="flex gap-2 bg-base-button items-center justify-center rounded-md w-[4.5rem] h-8 px-2 py-3">
                            <Minus size={14} className="text-purple cursor-pointer hover:text-purple-dark transition-all" onClick={handleRemoveFromCart(item)} />
                            <span className="text-base leading-snug text-base-title cursor-default select-none">{item.quantity}</span>
                            <Plus size={14} className="text-purple cursor-pointer  hover:text-purple-dark transition-all" onClick={handleAddToCart(item)} />
                          </div>

                          <div className="flex gap-1 p-2 h-8 bg-base-button items-center justify-center rounded-md cursor-pointer" onClick={handleDeleteFromCart(item)}>
                            <Trash size={14} className="text-purple cursor-pointer hover:text-purple-dark transition-all" />
                            <p className="text-xs text-base-text leading-relaxed select-none">REMOVER</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-8 px-10 max-h-full">
              <ShoppingCart size={64} className="text-purple-dark text-opacity-15" weight="fill" />
              <p className="text-base text-base-text leading-snug text-center">Parece que você ainda nào adicionou nenhum café no carrinho </p>
            </div>
          )
        }

        {cartState.length > 0 && (
          <><div className="flex flex-col py-6 gap-3">
            <div className="flex justify-between">
              <h2 className="text-sm text-base-text leading-snug">Total de itens</h2>
              <p className="text-base text-base-text leading-snug">R$ {totalValueInCart.toFixed(2).replace('.', ',')}</p>
            </div>

            <div className="flex justify-between">
              <h2 className="text-sm text-base-text leading-snug">Entrega</h2>
              <p className="text-base text-base-text leading-snug">R$ {orderFee.toFixed(2).replace(".", ",")}</p>
            </div>

            <div className="flex justify-between">
              <h2 className="text-xl text-base-subtitle leading-snug font-bold">Total</h2>
              <p className="text-xl text-base-subtitle leading-snug font-bold">R$ {(totalValueInCart + orderFee).toFixed(2).replace(".", ",")}</p>
            </div>
          </div><div>
              <button type="submit" className="w-full h-12 bg-yellow rounded-md text-white text-sm font-bold leading-relaxed hover:bg-yellow-dark transition-all">CONFIRMAR PEDIDO</button>
            </div></>
        )}

      </div>
    </section>
  )
}