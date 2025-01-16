import { Stack, Button } from "react-bootstrap"
import { useCartContext } from "../context/CardContex"
import ProductItems from '../data/Product.json'

type ProductItemProps={
    id: number
    qty: number
}

function CartItem({id,qty}:ProductItemProps) {
 const {removeItem}=useCartContext() 

    const product= ProductItems.find((item)=>(item.id===id))
    if(product ===null) return null

  return (
    <Stack  direction="horizontal" gap={2} className="d-flex align-items-center">
        <img src={product?.imgUrl} 
        style={{width: '125px', height:'75px', objectFit:'cover'}} />
        <div className="me-auto text-dark">
          {product?.title}{' '}
          {qty>1 &&(
            <span className="text-muted" style={{fontSize:'.65rem'}}>
               {qty}</span>
          )}
          <div>{product?.price} * {qty}</div>
          <Button 
          size="sm"
          style={{background:'red'}}
          onClick={()=>removeItem(id)}>
            &times;</Button>
        </div>
        

    </Stack>
  )
}

export default CartItem