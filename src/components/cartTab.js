import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './cartItem'
import { toggleStatusTab } from '../stores/cart'

const CartTab = () => {
  const carts = useSelector(store => store.cart.items);
  const statusTab = useSelector(store => store.cart.statusTab);
  const dispatch = useDispatch();
  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  }
  return (
    <div className={`fixed top-0 right-0 bg-stone-600 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px]
    transform transition-transform duration-500
    ${statusTab === false ? "translate-x-full" : ""}
    `}>
          <h2 className='p-5 text-white text-2xl'>SHOP CLOTHES</h2>
          <div className='p-5'>
            {carts.map((item, key) =>
              <CartItem key={key} data={item}/>
            )}
          </div>
          <div className='grid grid-cols-2'>
            <button className='bg-black text-white font-bold' onClick={handleCloseTabCart}>CLOSE</button>
            <button className='bg-red-600 text-white font-bold'>CHECKOUT</button>
          </div>
    </div>
  )
}

export default CartTab