'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import '@babel/polyfill'

import '../favicon.ico'
import './media/styles/main.scss'
import store from './store'

import Pizza from './containers/Pizza'
render(
  <Provider store={store}>
    <Pizza />
  </Provider>,
  document.getElementById('root')
)