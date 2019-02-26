import React from 'react'
import { sumSizePrice, countToppings } from '../utilities'

const SizeColumn = props => {
  const { name, basePrice, toppings, maxToppings } = props.size

  return (
    <div className='col-md-4'>
      <div className='card'>
        <div className='pizza-card-header'>
          <span className='card-pizza-size'>{name}</span>
          <div className='card-pizza-price'>${basePrice}</div>
        </div>
        <span className='card-topping'>Toppings:</span>
        <ul className='option-list'>
          {toppings.map(
            (
              { topping: { name: toppingName, price }, checked },
              toppingIndex
            ) => (
              <li
                key={`topping_${props.sizeIndex}${toppingIndex}`}
                className='card-info'
              >
                <input
                  type='checkbox'
                  onChange={() =>
                    props.checkTopping({
                      name: `${props.sizeIndex}.${toppingIndex}.checked`,
                      checked: checked,
                    })
                  }
                  checked={checked}
                  disabled={
                    checked === false &&
                    maxToppings !== null &&
                    countToppings(toppings) >= maxToppings
                  }
                />{' '}
                {toppingName}
                <span className='topping-price'>{price}</span>
              </li>
            )
          )}
        </ul>

        <div className='size-total-value'>
          Total:
          <span>${sumSizePrice(toppings, basePrice)}</span>
        </div>

        <div className='topping-select-counter'>
          You can select:{' '}
          <span>
            {countToppings(toppings)}/{maxToppings || '-'}
          </span>
        </div>

        <div className='pizza-card-footer mt-10'>
          <button
            onClick={() => props.addToCart(props.size)}
            className='btn-add-to-cart'
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default SizeColumn
