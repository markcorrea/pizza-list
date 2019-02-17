import React from 'react'
import userImage from '../../media/images/userMarcus.jpg'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='t-header'>
        <div className='logo'>
          <i className='fa fa-pizza-slice' />
        </div>
        <div className='header-pizza-on'>
          <span>Luigi's Pizza</span>
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
