import { products } from "./products"
import { ProductCard } from "./ProductCard"

export default function ProductList() {

  return (
    <div className="flex flex-col gap-14 pt-8">
      <h1 className="font-baloo2 font-extrabold leading-snug text-3xl">Nossos Cafés</h1>
      <div className="grid grid-cols-4 gap-x-8 gap-y-10">
        {products.map((product) => {
          return (
            <ProductCard key={product.id} product={product} />
          )
        })}
      </div>
    </div>
  )
}