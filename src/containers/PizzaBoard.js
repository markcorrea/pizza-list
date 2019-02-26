import React from 'react'
import { connect } from 'react-redux'

import { checkTopping, setSizeFirstState } from '../actions/sizeAction'
import { addToCart, removeFromCart } from '../actions/cartAction'
import SizeBoard from '../components/SizeBoard'
import Cart from '../components/Cart'

class PizzaBoard extends React.Component {
  componentDidMount() {
    this.props.setSizeFirstState(this.props.data)
  }

  render() {
    return (
      <div>
        {this.props.size.pizzaSizes ? (
          <div className='container mt-20'>
          <div className='row'>
            <div className='col-md-8'>
              {
                <SizeBoard
                  {...this.props}
                  checkTopping={this.props.checkTopping}
                  addToCart={this.props.addToCart}
                />
              }
            </div>
            <div className='col-md-4'>
              {<Cart {...this.props} removeFromCart={this.props.removeFromCart} />}
            </div>
          </div>
        </div>
        ) : ''}
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
