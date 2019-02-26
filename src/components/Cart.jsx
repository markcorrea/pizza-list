import React from 'react'
import {sumSizePrice, sumCartTotal} from '../utilities'

const Cart = props => {
  return (
    <div className='form-container'>
      <div className='pizza-cart-title'>Pizza Cart</div>
      {props.cart.length < 1 && (
        <div className='empty-cart'>Your cart is empty</div>
      )}
      {props.cart.length > 0 && (
        <div>
          <ul className='cart-list'>
            {props.cart.map(({ name, toppings, basePrice }, pizzaIndex) => {
              return (
                <li key={`pizza_${pizzaIndex}`}>
                  <div
                    onClick={() => props.removeFromCart(pizzaIndex)}
                    className='cart-pizza-delete'
                  >
                    <i className='fa fa-minus-circle' />
                  </div>
                  {name}
                  <span className='cart-pizza-price'>
                    {' '}
                    ${sumSizePrice(toppings, basePrice)}
                  </span>
                  <ul className='cart-list-toppings'>
                    {toppings.map(({ topping }, toppingIndex) => {
                      return (
                        <li key={`topping_${toppingIndex}`}>
                          {topping.name}
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            })}
          </ul>
          <div className='cart-list-total'>
            Total
            <span className='cart-list-total-price'>
              ${sumCartTotal(props.cart)}
            </span>
          </div>
        </div>
      )}
      <div style={{ clear: 'both' }} />
    </div>
  )
}

export default Cart