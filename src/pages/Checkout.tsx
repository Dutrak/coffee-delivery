import { Header } from "../components/Header";
import { CoffeeSection } from "../components/form/CoffeeSection";
import { OrderSection } from "../components/form/OrderSection";

export function Checkout() {


  return (
    <main>
      <Header />
      <form action="" className="pt-10 flex max-w-[1120px] mx-auto gap-8">
        <OrderSection />
        <CoffeeSection />
      </form>
    </main >

  )
}