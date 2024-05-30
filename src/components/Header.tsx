import { MapPin, ShoppingCart } from "phosphor-react";
import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <header className="flex flex-row justify-between px-40">
      <img src={Logo} alt="Logo da Alura" />
      <div className="flex flex-row gap-3 ">
        <div className="flex gap-0.5 bg-purple-light rounded-lg items-center justify-center h-9 p-2">
          <MapPin size={16} weight="fill" className="text-purple" />
          <span className="text-sm leading-snug font-normal text-purple-dark">Piracaia, SP</span>
        </div>
        <div className="w-9 h-9 bg-yellow-light pmr-7 rounded-lg flex justify-center items-center">
          <a className="cursor-pointer"><ShoppingCart size={22} weight="fill" className=" text-yellow-dark" /></a>
        </div>
      </div>
    </header>
  )
}