import {Card, Button} from "react-bootstrap"
import { useCartContext } from "../context/CardContex"
type ProductProps={
  id:number
  title:string
  price:string
  description:string
  imgUrl:string  
}

function Product({id,title,price,description, imgUrl}:ProductProps) {
  const{getItem,increaseItem, decreaseItem,removeItem}=useCartContext()
  const qty=getItem(id)
  return (
  <Card className="height:100">
    <Card.Img 
    variant="top"
    src={imgUrl}
    height="200px"
    style={{objectFit:'cover'}}
    />
    <Card.Body className="d-flex flex-column bg-dark">
      <Card.Title className="d-flex justify-content-between align-items-baseline mb-2 text-light">
      <span className="fs-2">{title}</span>
      <span>{price}</span>
      </Card.Title>
      <Card.Text className="text-light ">{description}</Card.Text>
      <div className="mt-auto">
        {
          qty===0 ?(
            <Button className="w-100 btn-secondary" onClick={()=>increaseItem(id)}>Add to cart</Button>
          ): (
            <div className="d-flex align-items-center flex-column" 
            style={{gap:'.5rem'}}>
              <div className="d-flex align-items-center justify-content-center">
                <Button className="btn-secondary" onClick={()=>increaseItem(id)}>+</Button>
                <span className="fs-5 m-3 text-light">{qty}</span>
                <Button className="btn-secondary" onClick={()=>decreaseItem(id)}>-</Button>
              </div>
              <Button className="btn-light" size="sm" onClick={()=>removeItem(id)}>Remove</Button>

            </div>
          )
        }
      </div>
    </Card.Body>

  </Card>
  )
}

export default Product
