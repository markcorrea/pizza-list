const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newSize = {
        name: action.payload.name,
        basePrice: action.payload.basePrice,
        toppings: action.payload.toppings,
      }
      state = [...state, newSize]
      break
    case 'REMOVE_FROM_CART':
      state.splice(action.payload, 1)
      state = Array.from(state)
      break
  }
  return state
}

export default cartReducer
