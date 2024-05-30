import { MapPin, ShoppingCart } from "phosphor-react";
import Logo from "../assets/Logo.svg";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function Header() {

  const cartContext = useContext(CartContext);
  const { cartState } = cartContext;

  return (
    <header className="flex flex-row justify-between px-40">
      <img src={Logo} alt="Logo da Alura" />
      <div className="flex flex-row gap-3 ">
        <div className="flex gap-0.5 bg-purple-light rounded-lg items-center justify-center h-9 p-2">
          <MapPin size={16} weight="fill" className="text-purple" />
          <span className="text-sm leading-snug font-normal text-purple-dark">Piracaia, SP</span>
        </div>
        <div className="w-9 h-9 bg-yellow-light pmr-7 rounded-lg flex justify-center items-center relative">
          <a className="cursor-pointer">
            <ShoppingCart size={22} weight="fill" className=" text-yellow-dark" />
          </a>
          <span className="absolute -top-2 -right-2 bg-yellow-dark text-xs text-white font-bold 
          rounded-full w-5 h-5 flex justify-center items-center leading-snug">
            {cartState.length > 9 ? '9+' : cartState.length}
          </span>
        </div>
      </div>
    </header>
  )
}