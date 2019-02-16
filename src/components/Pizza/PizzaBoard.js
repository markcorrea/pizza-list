import React from 'react'

export class PizzaBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.setState({ data: this.props.data, cart: [] })
    console.log(this.props.data)
  }

  consoleState = () => {
    console.log('CURRENT PROPS', this.state.data)
  }

  render() {
    return <div>{this.state.data ? this.renderContainer() : ''}</div>
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

  handleCheckboxChange = () => {
    let key = event.target.name
    let value = event.target.value === 'true'
    let keySplit = key.split('.')

    this.state.data.pizzaSizes[keySplit[0]].toppings[
      keySplit[1]
    ].checked = !value
    this.setState({ data: this.state.data })
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
      if (item.checked) sum+= item.topping.price
    })
    return parseFloat(sum.toFixed(2))
  }

  renderBoard() {
    const { pizzaSizes } = this.state.data
    return (
      <div>
        <div className='post-container'>
          <div className='row'>
            {pizzaSizes.map(({ name, basePrice, toppings, maxToppings }, sizeIndex) => (
              <div key={'size_board_' + sizeIndex} className='col-md-4'>
                <div className='post-card'>
                  <div className='post-header'>
                    <span className='card-pizza-size'>{name}</span>
                    <div className='card-pizza-price'>${basePrice}</div>
                  </div>
                  <span className='card-username'>Toppings:</span>
                  <ul className='option-list'>
                    {toppings.map(
                      (
                        { topping: { name: toppingName, price }, checked },
                        toppingIndex
                      ) => (
                        <li
                          key={'topping_' + sizeIndex + toppingIndex}
                          className='card-info'
                        >
                          <input
                            type='checkbox'
                            name={`${sizeIndex}.${toppingIndex}.checked`}
                            onChange={() => this.handleCheckboxChange(checked)}
                            value={checked}
                            checked={checked}
                            disabled={checked === false && maxToppings !== null && this.countToppings(toppings) >= maxToppings}
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

                  <div className='post-footer mt-10'>
                    <button className='btn-add-to-cart'>Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  renderCart = () => {
    return (
      <div className='form-container'>
        <div className='pizza-cart-title'>Pizza Cart</div>
        <ul className='cart-list'>
          <li>
            Small<span className='cart-pizza-price'> $25,00</span>
            <ul className='cart-list-toppings'>
              <li>Pepperoni</li>
              <li>Cheese</li>
              <li>Tomatoes</li>
            </ul>
          </li>
          <li>
            Medium<span className='cart-pizza-price'> $40,00</span>
            <ul className='cart-list-toppings'>
              <li>Pepperoni</li>
              <li>Cheese</li>
            </ul>
          </li>
          <li>
            Large<span className='cart-pizza-price'> $65,00</span>
            <ul className='cart-list-toppings'>
              <li>Pepperoni</li>
              <li>Cheese</li>
              <li>Tomatoes</li>
              <li>Bolognese</li>
              <li>Chocolate</li>
            </ul>
          </li>
        </ul>
        <div className='cart-list-total'>
          Total<span className='cart-list-total-price'>$ 100,00</span>
        </div>
        <div style={{ clear: 'both' }} />
      </div>
    )
  }
}
