// import React from 'react'
// import {
// Container,
// FormControl, 
// Navbar, 
// Dropdown,
// Badge,
// Nav,
// NavbarBrand,
// Button} 
// from "react-bootstrap";
// import { AiFillDelete } from 'react-icons/ai';
// import {FaShoppingCart} from 'react-icons/fa';
// import {Link} from 'react-router-dom';
// import { CartState } from '../context/Context';


// function HeaderTwo() {

//    const {state: {cart },
//    dispatch,
//    productDispatch
// } = CartState();

//   return (
//     <Navbar className='navbar'  style={{ height: 80, position: "sticky"}} fixed="top" >
//         <Container>
//             <NavbarBrand >
//                 <Link to ="/" >
//                     <img src='https://www.kindpng.com/picc/m/587-5871102_food-delivery-icon-hd-png-download.png'
//                     style={{ height: 70, width: 70, borderRadius: 80}}
//                      />
//                 </Link> 
//             </NavbarBrand>
          

//             <Nav>
//             <Dropdown>
//                 <Dropdown.Toggle variant='primary' >
//                     <FaShoppingCart color = "white" fontSize="25px" />
//                     <Badge>{cart.length}</Badge>
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu style={{minWidth: 370,position: "absolute", left: "-250px"}} >

//                     { cart.length>0 ? (
//                     <div className='main'>
//                            {
//                             cart.map((prod) => (
//                                 <span className='cartitem' key={prod.id}>
//                                     <img src={prod.imgSrc}
//                                     className="cartItemImg"
//                                     alt={prod.name}
//                                     />
//                                     <div className='cartItemDetail'>
//                                         <span>{prod.name}</span>
//                                         <span>price: $ {prod.price.split(".")[0]}</span>
//                                     </div>
//                                     <AiFillDelete 
//                                         fontSize="20px"
//                                         style={{ cursor: "pointer"}}
//                                         onClick={() => 
//                                             dispatch({
//                                                 type: "REMOVE_FROM_CART",
//                                                 payload: prod,
//                                             })
//                                         }
//                                         />
//                                 </span>
//                             ))
//                            }
//                            <Link to = "/cart">
//                             <Button style={{width: "95%", margin: "0 10px" }}>
//                                 Go To Cart
//                             </Button>
//                             </Link> 
//                     </div>) 
                    
//                     : (
//                         <span style={{ padding: 10}}>Cart is Empty!</span>
//                     ) }

                    
//                 </Dropdown.Menu>
//             </Dropdown>
//             </Nav>
//         </Container>
//     </Navbar>
//   )
// }

// export default HeaderTwo