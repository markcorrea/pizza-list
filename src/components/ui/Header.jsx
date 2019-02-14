import React from 'react'
import { inject, observer } from 'mobx-react'
import userImage from '../../media/images/userMarcus.jpg'

@inject('PizzaController')
@observer
export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.PizzaController = props.PizzaController
  }

  render() {
    return (
      <div className='t-header'>
        <div className='logo'>
          <i className='fa fa-headphones' />
        </div>
        <div className='header-trending-on'>
          <span>Trending on:</span> {this.PizzaController.currentCity}
        </div>
        <div className='user-image'>
          <img alt='user' src={userImage} />
        </div>
        <div className='welcome-message'>
          <span className='primary-font'>Welcome,</span>
          <span className='primary-font-b'> Marcus Corrêa!</span>
        </div>
      </div>
    )
  }
}
