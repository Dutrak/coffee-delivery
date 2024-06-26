import { MapPin, ShoppingCart } from "phosphor-react";
import Logo from "/Logo.svg";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { NavLink } from "react-router-dom";

interface UserAddress {
  cidade: string | null,
  uf: string | null,
}

export function Header() {

  // get user address form local storage
  const userAddress: UserAddress = JSON.parse(localStorage.getItem('@coffe-delivery:userAddress-1.0.0') || '{}');

  const cartContext = useContext(CartContext);
  const { cartState } = cartContext;

  return (
    <header className="flex justify-between max-w-[1120px] mx-auto pb-8">
      <NavLink to={'/'}>
        <img src={Logo} />
      </NavLink>
      <div className="flex flex-row gap-3">
        <div className="flex gap-0.5 bg-purple-light rounded-lg items-center justify-center h-9 p-2">
          <MapPin size={16} weight="fill" className="text-purple" />
          <span className="text-sm leading-snug font-normal text-purple-dark">
            {userAddress?.cidade || 'São Paulo'}, {userAddress.uf?.toUpperCase() || 'SP'}
          </span>
        </div>
        <div className="w-9 h-9 bg-yellow-light rounded-lg flex justify-center items-center relative">
          <NavLink to={'/checkout'}>
            <div className="cursor-pointer">
              <ShoppingCart size={22} weight="fill" className=" text-yellow-dark" />
            </div>
            <span className="absolute -top-2 -right-2 bg-yellow-dark text-xs text-white font-bold 
          rounded-full w-5 h-5 flex justify-center items-center leading-snug">
              {cartState.length > 9 ? '9+' : cartState.length}
            </span>
          </NavLink>

        </div>
      </div>
    </header >
  )
}