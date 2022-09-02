import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from './container.module.css'


export default function Navbar() {
  const productsItem = useSelector((state) => state.cart);
  return (
    <>
      <div className={classes.wrapper}>
        <span className={classes.Heading}>Redux Toolkit</span>

        <div className={classes.links}>
          <Link to='/' className={classes.link}>Home</Link>
          <Link to='/cart' className={classes.link}>Cart</Link>
        </div>

        <span className={classes.counter}>
          Cart Item : {productsItem.length}
        </span>
      </div>
    </>
  )
}
