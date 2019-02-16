import React, { Component } from 'react'
import { PizzaBoard } from './PizzaBoard'
import Header from '../ui/Header.jsx'
import Footer from '../ui/Footer.jsx'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import stateLink from './stateLink'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

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

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink(cache),
    new HttpLink({
      uri: 'https://core-graphql.dev.waldo.photos/pizza',
    }),
  ]),
  cache,
})

export default class Pizza extends Component {
  constructor(props) {
    super(props)
  }

  defaultCheckboxValues = data => {
    data.pizzaSizes.map(({ toppings }) => {
      toppings.map(topping => {
        topping.checked = topping.defaultSelected
      })
    })
    return data
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
              this.defaultCheckboxValues(data)
              return <PizzaBoard {...this.props} data={data}/>
            }}
          </Query>
          <Footer {...this.props} />
        </div>
      </ApolloProvider>
    )
  }
}
