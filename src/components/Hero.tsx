import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import HeroImage from "../assets/Hero.svg"

export function Hero() {
  return (
    <section className="flex gap-14 py-24">
      <aside className="flex gap-16 flex-col">
        <div className="flex flex-col gap-4">
          <h1 className="font-baloo2 font-extrabold text-5xl leading-snug text-base-title">Encontre o café perfeito para qualquer hora do dia</h1>
          <h2 className="text-xl leading-snug text-base-subtitle">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-10">
            <div className="flex gap-4 w-60 items-center">
              <div className="rounded-full bg-yellow-dark flex items-center justify-center w-8 h-8">
                <span><ShoppingCart size={16} className="text-background" /></span>
              </div>
              <p className="text-base text-base-title leading-snug">Compra simples e segura</p>
            </div>
            <div className="flex gap-4 w-60 items-center">
              <div className="rounded-full bg-yellow flex items-center justify-center w-8 h-8">
                <span><Package size={16} className="text-background" /></span>
              </div>
              <p className="text-base text-base-title leading-snug">Entrega rápida e rastreada</p>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex gap-4 w-60 items-center">
              <div className="rounded-full bg-base-text flex items-center justify-center w-8 h-8">
                <span><Timer size={16} className="text-background" /></span>
              </div>
              <p className="text-base text-base-title leading-snug">Entrega rápida e rastreada</p>
            </div>
            <div className="flex gap-4 w-60 items-center">
              <div className="rounded-full bg-purple flex items-center justify-center w-8 h-8">
                <span><Coffee size={16} className="text-background" /></span>
              </div>
              <p className="text-base text-base-title leading-snug">Entrega rápida e segura</p>
            </div>
          </div>
        </div>
      </aside>
      <img src={HeroImage} alt="Café" className="h-full" />
    </section>
  )
}