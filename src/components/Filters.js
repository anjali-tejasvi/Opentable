import React from 'react'
import { Button, FormCheck } from 'react-bootstrap'
import { CartState } from '../context/Context';
import Rating from './Rating'

function Filters() {

// const [rate, setRate] = useState(3);

const {productState: {
        byFastDelivery,
        sort,
      byRating
      
}, productDispatch } = CartState();

console.log( byFastDelivery,
        sort,
      byRating)

  return (
    <div className='filters'>
        <span className='title'>Filter Items</span>
        <span>
            <FormCheck
                inline
                label='price: Low To High'
                name='group1'
                type='radio'
                id={`inline-1`}
                onChange={() =>
                    productDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "lowToHigh",
                    })
                }
                checked = {sort === "lowToHigh" ? true : false}
                />
        </span>
        <span>
        <FormCheck
                inline
                label='price: High To Low'
                name='group1'
                type='radio'
                id={`inline-2`}
                onChange={() =>
                 productDispatch({
                         type: "SORT_BY_PRICE",
                         payload: "highToLow",
                 })
                    }
                checked= {sort === "highToLow" ? true : false}
                />
        </span>
        <span>
        <FormCheck
                inline
                label='Include Out of Stock'
                name='group1'
                type='checkbox'
                id={`inline-3`}
                />
        </span>
        <span>
        <FormCheck
                inline
                label='Fast Delivery'
                name='group1'
                type='checkbox'
                id={`inline-4`}
                onChange={() =>
                productDispatch({
                     type: "FILTER_BY_DELIVERY",
                })
                }
                checked= {byFastDelivery}
                />
        </span>
        <label style={{paddingRight : 10 }}>Rating:  
        <Rating rating={byRating} className="rate"
        onClick={(i)=> productDispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1,
        })} 
        style={{ cursor: "pointer" }} />
        </label><br />
        <Button variant='light'
        onClick={() => 
                productDispatch({
                        type: "CLEAR_FILTERS",
                })
        }
        >Clear Filters</Button>
    </div>
  )
}

export default Filters