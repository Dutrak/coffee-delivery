import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";

export function OrderSection() {
  return (

    <section className="flex flex-col gap-4 w-[40rem]">
      <h1 className="font-baloo2 font-bold leading-snug text-lg text-base-subtitle">Complete seu Pedido</h1>
      <div className="flex flex-col gap-3">
        <div className="bg-base-card p-10 rounded-md">

          <div className="flex flex-col gap-8">
            <div className="flex gap-2">
              <MapPinLine size={22} className="text-yellow-dark" />
              <div>
                <h2 className="text-base leading-snug text-base-subtitle">Endereço de Entrega</h2>
                <p className="text-sm leading-snug text-base-text">Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <input type="text" id="cep" placeholder="CEP" className="w-[12.5rem] h-9 border border-base-button bg-base-input rounded-[4px] p-4
                          text-sm leading-snug text-base-text placeholder:text-sm placeholder:text-base-label placeholder:leading-snug focus:border-yellow-dark" />

              <input type="text" id="rua" placeholder="Rua" className="w-full h-9 border border-base-button bg-base-input rounded-[4px] p-4
                          text-sm leading-snug text-base-text placeholder:text-sm placeholder:text-base-label placeholder:leading-snug focus:border-yellow-dark" />

              <div className="flex gap-3">
                <input type="text" id="numero" placeholder="Número" className="w-[12.5rem] h-9 border border-base-button bg-base-input rounded-[4px] p-4
                            text-sm leading-snug text-base-text placeholder:text-sm placeholder:text-base-label placeholder:leading-snug focus:border-yellow-dark" />

                <input type="text" id="complemento" placeholder="Complemento" className="w-full h-9 border border-base-button bg-base-input rounded-[4px] p-4
                            text-sm leading-snug text-base-text placeholder:text-sm placeholder:text-base-label placeholder:leading-snug focus:border-yellow-dark" />
              </div>

              <div className="flex gap-3">
                <input type="text" id="bairro" placeholder="Bairro" className="w-[12.5rem] h-9 border border-base-button bg-base-input rounded-[4px] p-4
                            text-sm leading-snug text-base-text placeholder:text-sm placeholder:text-base-label placeholder:leading-snug focus:border-yellow-dark" />

                <input type="text" id="cidade" placeholder="Cidade" className="w-72 h-9 border border-base-button bg-base-input rounded-[4px] p-4
                            text-sm leading-snug text-base-text placeholder:text-sm placeholder:text-base-label placeholder:leading-snug focus:border-yellow-dark" />

                <input type="text" id="UF" placeholder="UF"
                  className="w-[5.5rem] h-9 border border-base-button bg-base-input rounded-[4px] p-4 
                            text-sm leading-snug text-base-text placeholder:text-sm placeholder:text-base-label placeholder:leading-snug focus:border-yellow-dark" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-base-card p-10 flex flex-col gap-8">
          <div className="flex gap-2">
            <CurrencyDollar size={22} className="text-purple" />
            <div>
              <h2 className="text-base leading-snug text-base-subtitle">Pagamento</h2>
              <p className="text-sm leading-snug text-base-text">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>

          <div className="flex gap-3">
            <input type="radio" id="cartao-credito" name="pagamento" value="dinheiro" className="hidden peer/credit" />
            <label htmlFor="cartao-credito" className="cursor-pointer w-1/3 p-4 bg-base-button flex gap-3 items-center rounded-md hover:bg-base-hover
             peer-checked/credit:bg-purple-light peer-checked/credit:border-[1px] peer-checked/credit:border-purple">
              <CreditCard size={16} className="text-purple" />
              <p className="text-xs text-base-text leading-relaxed">CARTÃO DE CRÉDITO</p>
            </label>

            <input type="radio" id="cartao-debito" name="pagamento" value="dinheiro" className="hidden peer/debit" />
            <label htmlFor="cartao-debito" className="cursor-pointer w-1/3 p-4 bg-base-button flex gap-3 items-center rounded-md hover:bg-base-hover 
            peer-checked/debit:bg-purple-light peer-checked/debit:border-[1px] peer-checked/debit:border-purple ">
              <Bank size={16} className="text-purple" />
              <p className="text-xs text-base-text leading-relaxed">CARTÃO DE DÉBITO</p>
            </label>

            <input type="radio" id="dinheiro" name="pagamento" value="dinheiro" className="hidden peer/money" />
            <label htmlFor="dinheiro" className="cursor-pointer w-1/3 p-4 bg-base-button flex gap-3 items-center rounded-md hover:bg-base-hover
            peer-checked/money:bg-purple-light peer-checked/money:border-[1px] peer-checked/money:border-purple">
              <Money size={16} className="text-purple" />
              <p className="text-xs text-base-text leading-relaxed">DINHEIRO</p>
            </label>
          </div>

        </div>
      </div>
    </section>
  )
}