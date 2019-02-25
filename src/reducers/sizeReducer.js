const sizeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHECK_TOPPING':
      console.log('action.payload.checked', action.payload.checked)
      console.log('PAYLOAD', action.payload)
      const keySplit = action.payload.name.split('.')
      state.pizzaSizes[keySplit[0]].toppings[keySplit[1]].checked = !action
        .payload.checked
      console.log('AFTER CHANGE', state)
      state = Object.assign({}, state)
      break
    case 'SET_SIZE_FIRST_STATE':
      state = Object.assign({}, action.payload)
      break
  }
  return state
}

export default sizeReducer
