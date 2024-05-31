import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import './global.css'
import { CartContextProvider } from "./contexts/CartContext";

export function App() {
  return (
    <BrowserRouter basename={"/"}>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </BrowserRouter>
  )
}
