import {  Offcanvas, Stack } from "react-bootstrap"
import { useCartContext } from "../context/CardContex"
import CartItem from "../components/CartItem"
import ProductItems from '../data/Product.json'
type sideBarProps={
    isOpen:boolean
}


function SideBar({isOpen}: sideBarProps) {
    const {closeCart, cartItems} = useCartContext();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title as="h5" className="text-dark">Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {
              cartItems.map((item)=>(
                <CartItem key={item.id} {...item} />
              ))

            }
            <div className="fw-bord fs-5 text-dark">
             Total:{' '}
            {cartItems.reduce((total,currentItem)=>{
              const Product= ProductItems.find((item)=>item.id===currentItem.id)
             
              
            const result= total + (Product?.price || 0)  * currentItem.qty
           
              return result
           
              
            },0)
            
            }
            </div>
          </Stack>
        </Offcanvas.Body>

    </Offcanvas>
  )
}

export default SideBar
