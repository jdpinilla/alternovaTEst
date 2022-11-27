import { SingleProduct } from "@/Products/SingleProduct"
import { Products } from "@/Products/index.jsx"
import styled from "styled-components"
import Navbar from "./Navbar"
import { Cart } from "./Cart"
import { CartProvider, useCartContext } from "./context/CartContext"

import { useState } from "react"
import { ModalTemplate } from "./Modal"

function App() {
  const [open, isOpen] = useState(false)
  return (
    <Main className="App">
      <CartProvider>
        <Navbar open={open} isOpen={isOpen} />
        <Products />
        <Cart open={open} isOpen={isOpen} />
      </CartProvider>
    </Main>
  )
}

export default App

const Main = styled.div`
  height: 100%;
  position: relative;
  background-color: white;
`