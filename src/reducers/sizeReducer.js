const sizeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHECK_TOPPING':
      const keySplit = action.payload.name.split('.')
      state.pizzaSizes[keySplit[0]].toppings[keySplit[1]].checked = !action
        .payload.checked
      state = Object.assign({}, state)
      break
    case 'SET_SIZE_FIRST_STATE':
      state = Object.assign({}, action.payload)
      break
  }
  return state
}

export default sizeReducer
