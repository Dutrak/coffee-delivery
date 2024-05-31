import { Header } from "../components/Header";
import { CoffeeSection } from "../components/form/CoffeeSection";
import { OrderSection } from "../components/form/OrderSection";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation, useNavigate } from "react-router-dom";
import { Success } from "../components/Success";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";


const orderFormValidationSchema = z.object({
  cep: z.string().min(8, { message: 'CEP inválido' }),
  rua: z.string().min(3, { message: 'Rua inválida' }),
  numero: z.string().min(3, { message: 'Número inválido' }),
  complemento: z.string().min(1, { message: 'Complemento inválido' }),
  bairro: z.string().min(3, { message: 'Bairro inválido' }),
  cidade: z.string().min(3, { message: 'Cidade inválida' }),
  uf: z.string().min(2, { message: 'UF inválido' }),
  pagamento: z.string().min(1, { message: 'Forma de pagamento inválida' }),
})

export type orderFormData = z.infer<typeof orderFormValidationSchema>

export function Checkout() {

  const navigate = useNavigate()
  const location = useLocation();

  const { resetCart } = useContext(CartContext)

  const orderForm = useForm({
    resolver: zodResolver(orderFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      pagamento: '',
    }
  })

  const { handleSubmit } = orderForm

  function onSubmit(data: orderFormData) {

    // save city location to local storage
    const address = {
      cidade: data.cidade,
      uf: data.uf
    }

    // reset cart

    localStorage.setItem('@coffe-delivery:cartState-1.0.0', JSON.stringify([]))
    resetCart()

    localStorage.setItem('@coffe-delivery:userAddress-1.0.0', JSON.stringify(address))
    navigate('/checkout', { state: data })
  }


  const data = location.state as orderFormData

  return (
    <main>
      <Header />
      {data ? <Success /> :
        <FormProvider {...orderForm}>
          <form action="" onSubmit={handleSubmit(onSubmit)} className="pt-10 flex max-w-[1120px] mx-auto gap-8">
            <OrderSection />
            <CoffeeSection />
          </form>
        </FormProvider>
      }

    </main >

  )
}