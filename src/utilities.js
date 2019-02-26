const defaultCheckboxValues = toppings => {
  toppings.map(topping => {
    topping.checked = topping.defaultSelected
  })
}

const countToppings = toppings => {
  return toppings.reduce((accumulator, item) => {
    return item.checked ? accumulator + 1 : accumulator
  }, 0)
}

const sumSizePrice = (toppings, basePrice) => {
  return parseFloat(
    toppings
      .reduce((accumulator, item) => {
        return item.checked ? accumulator + item.topping.price : accumulator
      }, basePrice)
      .toFixed(2)
  )
}

const sumCartTotal = cart => {
  return parseFloat(
    cart
      .reduce((accumulator, item) => {
        return accumulator + sumSizePrice(item.toppings, item.basePrice)
      }, 0)
      .toFixed(2)
  )
}

module.exports = {
  countToppings,
  defaultCheckboxValues,
  sumSizePrice,
  sumCartTotal,
}
