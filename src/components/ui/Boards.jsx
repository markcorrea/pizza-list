import React from 'react'

export class Boards extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className='post-container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='post-card'>
                <div className='post-header'>
                  <span className='card-pizza-size'>Small</span>
                  <br />
                </div>
                <span className='card-username'>Toppings:</span>
                <ul className='option-list'>
                  <li className='card-info'>
                    <input type='checkbox' /> Pepperoni<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Cheese<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Tomatoes<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Onions<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Alfavaca<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Swiss cheese<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Bolognese<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Chocolate<span className='topping-price'>25</span>
                  </li>
                </ul>

                <div className='post-footer mt-10'>
                  <button className='btn-add-to-cart'>Add to cart</button>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='post-card'>
                <div className='post-header'>
                  <span className='card-pizza-size'>Small</span>
                  <br />
                </div>
                <span className='card-username'>Toppings:</span>
                <ul className='option-list'>
                  <li className='card-info'>
                    <input type='checkbox' /> Pepperoni<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Cheese<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Tomatoes<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Onions<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Alfavaca<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Swiss cheese<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Bolognese<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Chocolate<span className='topping-price'>25</span>
                  </li>
                </ul>

                <div className='post-footer mt-10'>
                  <button className='btn-add-to-cart'>Add to cart</button>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='post-card'>
                <div className='post-header'>
                  <span className='card-pizza-size'>Small</span>
                  <br />
                </div>
                <span className='card-username'>Toppings:</span>
                <ul className='option-list'>
                  <li className='card-info'>
                    <input type='checkbox' /> Pepperoni<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Cheese<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Tomatoes<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Onions<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Alfavaca<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Swiss cheese<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Bolognese<span className='topping-price'>25</span>
                  </li>
                  <li className='card-info'>
                    <input type='checkbox' /> Chocolate<span className='topping-price'>25</span>
                  </li>
                </ul>

                <div className='post-footer mt-10'>
                  <button className='btn-add-to-cart'>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
