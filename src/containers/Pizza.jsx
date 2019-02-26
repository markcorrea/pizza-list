import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Header from '../components/Header.jsx'
import PizzaBoard from './PizzaBoard'
import Footer from '../components/Footer.jsx'
import { defaultCheckboxValues } from '../utilities'

const PIZZA_QUERY = gql`
  query PizzaSizeQuery {
    pizzaSizes {
      name
      basePrice
      maxToppings
      toppings {
        topping {
          name
          price
        }
        defaultSelected
      }
    }
  }
`

const client = new ApolloClient({
  uri: 'https://core-graphql.dev.waldo.photos/pizza',
})

export default class Pizza extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Header {...this.props} />
          <Query query={PIZZA_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>
              if (error) console.log(error)
              data.pizzaSizes.map(({ toppings }) => {
                defaultCheckboxValues(toppings)
              })
              return <PizzaBoard {...this.props} data={data} />
            }}
          </Query>
          <Footer {...this.props} />
        </div>
      </ApolloProvider>
    )
  }
}
