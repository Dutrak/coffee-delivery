import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useLocation, useNavigate } from "react-router-dom";
import { orderFormData } from "../pages/Checkout";
import successImage from "/success.png"

export function Success() {

  const location = useLocation()
  const data: orderFormData = location.state

  const navigate = useNavigate()

  if (!data) {
    navigate('/checkout')
  }

  return (
    <section className="flex py-20 justify-between max-w-[1120px] mx-auto">
      <aside className="flex flex-col gap-10 w-[546px]">
        <div className="flex flex-col gap-1">
          <h1 className="font-baloo2 text-[2rem] leading-snug font-extrabold text-yellow-dark">Uhu! Pedido confirmado</h1>
          <p className="text-xl text-base-subtitle">Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <div className="p-0.5 bg-gradient-to-tl to-yellow from-purple rounded-es-[36px] rounded-se-[36px] rounded-ee-md rounded-ss-md">
          <div className="flex flex-col gap-8 p-10 bg-background rounded-es-[calc(36px-2px)] rounded-se-[calc(36px-2px)] rounded-ee-[calc(6px-2px)] rounded-ss-[calc(6px-2px)] ">
            <div className="flex flex-row gap-3">
              <div className="rounded-full bg-purple flex items-center justify-center w-8 h-8 self-center">
                <span><MapPin size={16} className="text-background" weight="fill" /></span>
              </div>
              <div className="flex flex-col">
                <h2 className="leading-snug text-base-text">Entrega em: <span className="font-bold leading-snug text-base-text">{data.rua}, {data.numero}</span></h2>
                <p className="leading-snug text-base-text">{data.bairro} - {data.cidade}, {data.uf.toUpperCase()}</p>
              </div>
            </div>

            <div className="flex flex-row gap-3">
              <div className="rounded-full bg-yellow flex items-center justify-center w-8 h-8 self-center">
                <span><Timer size={16} className="text-background" weight="fill" /></span>
              </div>
              <div className="flex flex-col">
                <h2 className="leading-snug text-base-text">Previsão de Entrega</h2>
                <p className="font-bold leading-snug text-base-text">20 min - 30 min</p>
              </div>
            </div>

            <div className="flex flex-row gap-3">
              <div className="rounded-full bg-yellow-dark flex items-center justify-center w-8 h-8 self-center">
                <span><CurrencyDollar size={16} className="text-background" weight="fill" /></span>
              </div>
              <div className="flex flex-col">
                <h2 className="leading-snug text-base-text">Pagamento na entrega</h2>
                <p className="font-bold leading-snug text-base-text">{data.pagamento}</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <aside className="flex items-end -mb-2.5 h-[293px] self-end">
        <img src={successImage} alt="Pedido confirmado" />
      </aside>
    </section>
  )
}