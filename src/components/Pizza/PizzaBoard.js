import React from 'react'

import { defaultCheckboxValues } from './utilities'

export class PizzaBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.setState({ data: this.props.data, cart: [] })
  }

  handleCheckboxChange = name => {
    const keySplit = name.split('.')

    const { data } = this.state
    data.pizzaSizes[keySplit[0]].toppings[keySplit[1]].checked = !data
      .pizzaSizes[keySplit[0]].toppings[keySplit[1]].checked

    this.setState({ data: data })
  }

  countToppings = toppings => {
    let counter = 0
    toppings.map(topping => {
      if (topping.checked) counter++
    })
    return counter
  }

  sumSizePrice = (toppings, basePrice) => {
    let sum = basePrice
    toppings.map(item => {
      if (item.checked) sum += item.topping.price
    })
    return parseFloat(sum.toFixed(2))
  }

  sumCartTotal = cart => {
    let cartTotal = 0
    cart.map(
      pizza => (cartTotal += this.sumSizePrice(pizza.toppings, pizza.basePrice))
    )
    return parseFloat(cartTotal.toFixed(2))
  }

  addToCart = size => {
    const newSize = {
      name: size.name,
      basePrice: size.basePrice,
      toppings: size.toppings.filter(item => item.checked === true),
    }

    const sizeIndex = this.state.data.pizzaSizes.findIndex(
      item => item.name === size.name
    )
    defaultCheckboxValues(this.state.data.pizzaSizes[sizeIndex].toppings)

    this.setState({
      data: this.state.data,
      cart: this.state.cart.concat(newSize),
    })
  }

  deleteSize = index => {
    const { cart } = this.state
    
    cart.splice(index, 1)
    this.setState({
      cart: cart,
    })
  }

  renderBoard() {
    const { pizzaSizes } = this.state.data
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
                                this.handleCheckboxChange(
                                  `${sizeIndex}.${toppingIndex}.checked`
                                )
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
                        onClick={() => this.addToCart(pizzaSizes[sizeIndex])}
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

  renderCart = () => {
    const { cart } = this.state
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
                      onClick={() => this.deleteSize(pizzaIndex)}
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

  renderContainer() {
    return (
      <div className='container mt-20'>
        <div className='row'>
          <div className='col-md-8'>{this.renderBoard()}</div>
          <div className='col-md-4'>{this.renderCart()}</div>
        </div>
      </div>
    )
  }

  render() {
    return <div>{this.state.data ? this.renderContainer() : ''}</div>
  }
}
