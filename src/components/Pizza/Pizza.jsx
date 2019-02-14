import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { PizzaController } from './PizzaController'
import { PizzaBoard } from './PizzaBoard'
import Header from '../ui/Header.jsx'
import Footer from '../ui/Footer.jsx'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: "https://core-graphql.dev.waldo.photos/pizza"
})

export default class Pizza extends Component {
  constructor(props) {
    super(props)
    this.PizzaController = new PizzaController(this.store)
  }

  render() {
    return (
      <ApolloProvider client={client}>
      <Provider PizzaController={this.PizzaController}>
        <div>
          <Header {...this.props} />
          <PizzaBoard {...this.props} />
          <Footer {...this.props} />
        </div>
      </Provider>
      </ApolloProvider>
    )
  }
}
