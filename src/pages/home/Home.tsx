import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import ProductList from "../../components/products/ProductsList";

export function Home() {
  return (
    <main className="mb-40">
      <Header />
      <Hero />
      <ProductList />
    </main>
  )
}