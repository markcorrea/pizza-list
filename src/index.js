'use strict'

import React from 'react'
import { render } from 'react-dom'
import '../favicon.ico'
import './media/styles/main.scss'
import '@babel/polyfill'

import Pizza from './components/Pizza/Pizza'
render(
  <div>
    <Pizza />
  </div>,
  document.getElementById('root')
)
