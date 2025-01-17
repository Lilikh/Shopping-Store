import { Container,Nav, Navbar as NavbarBs, Button } from "react-bootstrap"
import {NavLink} from "react-router-dom"
import { useCartContext } from "../context/CardContex"


function Navbar() {
  const {cartQty, openCart}=useCartContext()
 
  return (
   <NavbarBs className="bg-dark text-ligt mb-3">
    <Container>
      <Nav className="me-auto">
        <Nav.Link to="/" as={NavLink} className="text-light">Home</Nav.Link>
        <Nav.Link to="/shop" as={NavLink} className="text-light">Shop</Nav.Link>
        <Nav.Link to="/about" as={NavLink} className="text-light">About</Nav.Link>

      </Nav>
      <Button 
       onClick={openCart}
        variant="outline-light"
        style={{
          width:"3rem",
          height:"3rem",
          position:"relative",
          fontSize:"1.2 rem"
        }}
        >
          <i className="bi bi-cart"></i>
          <div 
          className="rounded-circle bg-secondary
           d-flex justify-content-center align-items-center"
           style={{
            color:'with',
            position:'absolute',
            width:'1.2rem',
            height:'1.2rem',
            bottom:'0',
            right:'0',
            transform:'translate(25%, 25%)',

           }}
           >{cartQty}</div>
        </Button>
    </Container>
   </NavbarBs>
  )
}

export default Navbar
