import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"

import Home from "./pages/Home"
import Shop from "./pages/shop"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import { CartProvider } from "./context/CardContex"
function App() {
  return (
    <CartProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </CartProvider>
  )
}

export default App
