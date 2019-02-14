import React from 'react'
import { observable } from 'mobx'
import { inject, observer } from 'mobx-react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Boards } from '../ui/Boards'

const PIZZA_QUERY = gql`
  query PizzaSizeQuery {
    pizzaSizes {
      name
      basePrice
      maxToppings
      toppings {
        topping {
          name
        }
        defaultSelected
      }
    }
  }
`

@inject('PizzaController')
@observer
export class PizzaBoard extends React.Component {
  @observable posts = []

  constructor(props) {
    super(props)
    this.PizzaController = props.PizzaController
    this.posts = this.PizzaController.posts
  }

  async componentDidMount() {
    console.log('mounted')
    console.log(this.posts)
  }

  renderContainer({ name, basePrice, maxToppings, toppings, }) {
    return (
      <div className='container mt-20'>
        <div className='row'>
          <div className='col-md-8'>
            pagina aqui
            <br />
            <Boards />
          </div>
          <div className='col-md-4'>
            {this.renderSizes()}

          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Query query={PIZZA_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>
            if (error) console.log(error)
            return this.renderContainer(data)
          }}
        </Query>
      </div>
    )
  }

  renderSizes = () => {
    return (
      <div className='form-container mt-20'>
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
