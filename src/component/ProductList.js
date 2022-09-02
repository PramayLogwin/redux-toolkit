import React, { useEffect, useState } from 'react'
import axios from 'axios';
import classes from './container.module.css'
import { add } from '../store/CartSlice';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

export default function ProductList() {
  const [product, setProduct] = useState([]);
  const dispacth = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('https://fakestoreapi.com/products')
        .catch((error) => {
          console.log("Product", error)
        })

      setProduct(response.data)
      // console.log(response.data);
    }
    fetch();
  }, [])

  const addToCart = (product) => {
    dispacth(add(product))
  }
  return (
    <>
      <div className={classes.productsWrapper}>
        {product.map((product) => {
          return <div className={classes.card} key={product.id}>
          <div>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h2>$ : {product.price}</h2>
            <Button variant='contained' onClick={() => addToCart(product)}> Add To Cart</Button>
          </div>
        </div>
        })}
      </div>
    </>
  )
}


