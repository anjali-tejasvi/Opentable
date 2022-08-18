import React, { useEffect, useState } from 'react'
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context'
import Rating from './Rating';

function Cart() {

  const { state: { cart },
  // dispatch,
} = CartState();

const [total, setTotal] = useState();

useEffect(() => {
  setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0));
}, [cart]);

  return (
   
    <div className='home'>
        <div className='productContainerCart'>
            <ListGroup>
            <h1 className='SummmaryHeading'>Order Summary</h1>
              {
                cart.map((prod)=> (
                  <ListGroup.Item key={prod.id}>
                    <Row>
                    <Col md={2} style={{width: "200px"}}>
                        <Image src={prod.imgSrc} alt={prod.name} className="cartItemImg" />
                    </Col>
                   <Col md={2}>
                        <span>{prod.name}</span>
                    </Col>
                    <Col md={2}>
                        <span>price: $ {prod.price}</span>
                    </Col>
                    <Col md={2}>
                       <Rating rating={prod.ratings} />
                    </Col>
                  </Row>
                  </ListGroup.Item>
                ))
              }
            </ListGroup>
        </div>
        <div className='Ordersummary'>
          <span style={{fontWeight: 700, fontSize: 20 }} className="CartTotal">Total Amount: $ {total}</span><br /><br />
          <Link to="/placed">
          <Button type="button" disabled={cart.length === 0} className="PlaceOrderOne"  >
            Place Order
          </Button>
          </Link>
           
            <Button type="button" disabled={cart.length === 0} className="PlaceOrderTwo" variant='danger'
              onClick={(e) => { window.location.reload(false)
                 
              }}
            >
              Cancle Order
            </Button>
            <p className='cod'>Only Cash On dilevery Avilable</p>
        </div>
       
    </div>
  )
}

export default Cart