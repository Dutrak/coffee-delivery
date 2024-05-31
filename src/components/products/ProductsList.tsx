import { products } from "./products"
import { ProductCard } from "./ProductCard"

export default function ProductList() {

  return (
    <div className="flex flex-col gap-14 pt-8 max-w-[1120px] mx-auto">
      <h1 className="font-baloo2 font-extrabold leading-snug text-3xl">Nossos Cafés</h1>
      <div className="flex flex-wrap gap-y-10 gap-x-6">
        {products.map((product) => {
          return (
            <ProductCard key={product.id} product={product} />
          )
        })}
      </div>
    </div>
  )
}