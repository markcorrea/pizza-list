import React, { Component } from 'react'
import { connect } from 'react-redux'

import { checkTopping } from '../../actions/sizeAction'
import { addToCart } from '../../actions/cartAction'

class SizeContainer extends Component {
  countToppings = toppings => {
    return toppings.reduce((accumulator, item) => {
      return item.checked ? accumulator + 1 : accumulator
    }, 0)
  }

  sumSizePrice = (toppings, basePrice) => {
    return parseFloat(
      toppings
        .reduce((accumulator, item) => {
          return item.checked ? accumulator + item.topping.price : accumulator
        }, basePrice)
        .toFixed(2)
    )
  }

  render() {
    const { name, basePrice, toppings, maxToppings } = this.props.size
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
                  key={`topping_${this.props.sizeIndex}${toppingIndex}`}
                  className='card-info'
                >
                  <input
                    type='checkbox'
                    onChange={() =>
                      this.props.checkTopping({
                        name: `${this.props.sizeIndex}.${toppingIndex}.checked`,
                        checked: checked,
                      })
                    }
                    checked={checked}
                    disabled={
                      checked === false &&
                      maxToppings !== null &&
                      this.countToppings(toppings) >= maxToppings
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
            <span>${this.sumSizePrice(toppings, basePrice)}</span>
          </div>

          <div className='topping-select-counter'>
            You can select:{' '}
            <span>
              {this.countToppings(toppings)}/{maxToppings || '-'}
            </span>
          </div>

          <div className='pizza-card-footer mt-10'>
            <button
              onClick={() => this.props.addToCart(pizzaSizes[sizeIndex])}
              className='btn-add-to-cart'
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkTopping: size => {
      dispatch(checkTopping(size))
    },
    addToCart: size => {
      dispatch(addToCart(size))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SizeContainer)
