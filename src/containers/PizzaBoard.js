import React from 'react'
import { connect } from 'react-redux'

import { checkTopping, setSizeFirstState } from '../actions/sizeAction'
import { addToCart, removeFromCart } from '../actions/cartAction'
import SizeContainer from '../components/SizeContainer'
import { sumSizePrice, sumCartTotal } from '../utilities'

class PizzaBoard extends React.Component {
  componentDidMount() {
    this.props.setSizeFirstState(this.props.data)
  }

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
            {pizzaSizes.map((currentSize, sizeIndex) => (
              <SizeContainer
                key={`size_board_${sizeIndex}`}
                size={currentSize}
                sizeIndex={sizeIndex}
                checkTopping={this.props.checkTopping}
                addToCart={this.props.addToCart}
              />
            ))}
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
                ${sumCartTotal(cart)}
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
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PizzaBoard)
