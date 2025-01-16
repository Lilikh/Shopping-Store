import {Row, Col} from 'react-bootstrap'

import productItem from "../data/Product.json"
import Product from '../components/Product'


function shop() {
  return (
   <>
   <Row md={2} xs={1} lg={3} className='g-3'>
    {productItem.map((item)=>(
        <Col key={item.id}>
            <Product {...item}/>
        </Col>
    ))}

   </Row>
   
   </>
  )
}

export default shop
