import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../context/Context';
import Rating from './Rating'

function SingleProduct({prod}) {

  const {
    state: {cart},
    dispatch,
  } = CartState();

  return (
    <div className='products'>
        <Card>
          <Card.Img variant='top' src={prod.imgSrc} 
            alt={prod.name} className="imagebox"
          />
          <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Subtitle style={{ paddingBottom: 10}}>
              <span>price: $ {prod.price.split(".")[0]} <br /></span>
              {prod.fastDelivery ? (
                  <div>Fast Delivery</div>
              ) : (
                  <div> 3 hours Delivery</div>
              )}
              <Rating rating={prod.ratings} />
            </Card.Subtitle>
            {
              cart.some(p => p.id===prod.id)?(
              <Button  onClick={() =>{
                dispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: prod,
                });
             }} 
              variant='danger'>
              Remove from cart
              </Button>
              ): (
                <Button onClick={() =>{
                    dispatch({
                      type: 'ADD_TO_CART',
                      payload: prod,
                    });
                }}
                
                >Add to cart</Button>
              )
            }
            

              {/* <Button>
                Add to cart
              </Button> */}
          </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct