import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './style.module.css'
import { remove } from '../store/CartSlice';
import { Button } from '@mui/material';

export default function Cart() {
  const dispatch = useDispatch();
  const productItem = useSelector((state) => state.cart)

  // console.log("10",productItem)

  const removeItem = (productId) => {
    // console.log("line 13",productId)
    dispatch(remove(productId))
  }
  return (
    <>
      <h1 className={classes.heading} >Cart Box</h1>
      <div className={classes.cartBox}>
        {
          productItem.map(product => {
            return <div className={classes.cartItems} key={product.id}>
              <img src={product.image} alt="" />
              <h2>{product.title}</h2>
              <h1>$ : {product.price}</h1>
              <Button variant='contained' onClick={() => removeItem(product.id)}> Remove</Button>

            </div>
          })
        }
      </div>
    </>)
}
