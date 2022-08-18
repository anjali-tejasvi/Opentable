import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context'
import Rating from './Rating';

function Cart() {

  const { state: { cart },
  dispatch,
} = CartState();

const [total, setTotal] = useState();

useEffect(() => {
  setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0));
}, [cart]);

  return (
    <div className='home'>
        <div className='productContainerCart'>
            <ListGroup>
              {
                cart.map((prod)=> (
                  <ListGroup.Item key={prod.id}>
                    <Row>
                    <Col md={2}>
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
                    <Col md={2}>
                    <Form.Select size='lg' 
                      onChange={(e) => dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Select>
                    </Col>
                    <Col>
                    <Button type='button'
                      variant='light'
                      onClick={() => 
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })
                      } >
                        <AiFillDelete fontSize="20px" />
                      </Button>
                    </Col>
                  </Row>
                  </ListGroup.Item>
                ))
              }
            </ListGroup>
        </div>
        <div className='summary'>
          <span className='SumCart'>
            Subtotal ({cart.length}) items <br /><br />
          </span>
          <span style={{fontWeight: 700, fontSize: 20 }} className="CartTotal">Total: $ {total}</span><br /><br />
          <Link to="/login">
          <Button type="button" disabled={cart.length === 0} className="checkOutBtn">
            Proceed to Checkout
          </Button>
          </Link>
        </div>
    </div>
  )
}

export default Cart