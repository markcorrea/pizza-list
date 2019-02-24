import React from 'react'
import { connect } from 'react-redux'

import { defaultCheckboxValues } from './utilities'
import { checkTopping, setSizeFirstState } from '../../actions/sizeAction'
import { addToCart, removeFromCart } from '../../actions/cartAction'

class PizzaBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.setSizeFirstState(this.props.data)
  }

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

  sumCartTotal = cart => {
    return parseFloat(
      cart
        .reduce((accumulator, item) => {
          return accumulator + this.sumSizePrice(item.toppings, item.basePrice)
        }, 0)
        .toFixed(2)
    )
  }

  // deleteSize = index => {
  //   const { cart } = this.state

  //   cart.splice(index, 1)
  //   this.setState({
  //     cart: cart,
  //   })
  // }

  render() {
    return (
      <div>
        {this.props.size.pizzaSizes ? this.renderContainer(this.props) : ''}
      </div>
    )
  }

  renderContainer(props) {
    return (
      <div className='container mt-20'>
        <div className='row'>
          <div className='col-md-8'>{this.renderBoard(props.size)}</div>
          <div className='col-md-4'>{this.renderCart(props.cart)}</div>
        </div>
      </div>
    )
  }

  renderBoard(size) {
    const { pizzaSizes } = size
    return (
      <div>
        <div className='card-container'>
          <div className='row'>
            {pizzaSizes.map(
              ({ name, basePrice, toppings, maxToppings }, sizeIndex) => (
                <div key={`size_board_${sizeIndex}`} className='col-md-4'>
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
                            key={`topping_${sizeIndex}${toppingIndex}`}
                            className='card-info'
                          >
                            <input
                              type='checkbox'
                              onChange={() =>
                                this.props.checkTopping({
                                  name: `${sizeIndex}.${toppingIndex}.checked`,
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
                        onClick={() =>
                          this.props.addToCart(pizzaSizes[sizeIndex])
                        }
                        className='btn-add-to-cart'
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    )
  }

  renderCart = cart => {
    return (
      <div className='form-container'>
        <div className='pizza-cart-title'>Pizza Cart</div>
        {cart.length < 1 && (
          <div className='empty-cart'>Your cart is empty</div>
        )}
        {cart.length > 0 && (
          <div>
            <ul className='cart-list'>
              {cart.map(({ name, toppings, basePrice }, pizzaIndex) => {
                return (
                  <li key={`pizza_${pizzaIndex}`}>
                    <div
                      onClick={() => this.props.removeFromCart(pizzaIndex)}
                      className='cart-pizza-delete'
                    >
                      <i className='fa fa-minus-circle' />
                    </div>
                    {name}
                    <span className='cart-pizza-price'>
                      {' '}
                      ${this.sumSizePrice(toppings, basePrice)}
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
                ${this.sumCartTotal(cart)}
              </span>
            </div>
          </div>
        )}
        <div style={{ clear: 'both' }} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    size: state.size,
    cart: state.cart,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkTopping: size => {
      dispatch(checkTopping(size))
    },
    setSizeFirstState: state => {
      dispatch(setSizeFirstState(state))
    },
    addToCart: size => {
      dispatch(addToCart(size))
    },
    removeFromCart: size => {
      dispatch(removeFromCart(size))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PizzaBoard)
