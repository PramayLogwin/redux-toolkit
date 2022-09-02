import React from 'react'
import ProductList from '../component/ProductList'
import classes from './style.module.css'

export default function Home() {
  return (
    <>
      <h1 className={classes.heading}>Product</h1>

      <div className={classes.Main_wrapper}>
        <ProductList />
      </div>
    </>

  )
}
