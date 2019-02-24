export function checkTopping(payload) {
  return {
    type: 'CHECK_TOPPING',
    payload: payload
  }
}

export function setSizeFirstState(payload) {
  return {
    type: 'SET_SIZE_FIRST_STATE',
    payload: payload
  }
}