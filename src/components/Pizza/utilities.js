const defaultCheckboxValues = toppings => {
  toppings.map(topping => {
    topping.checked = topping.defaultSelected
  })
}

module.exports = {
  defaultCheckboxValues,
}