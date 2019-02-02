const cartWithoutItem = (cart, item)  => cart.filter(cartItem => cartItem.id !== item.id)

const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]

const submitCart = (cart, item) => {
  // const submittedCart = state.cart;
  return [ ...itemInCart(cart, item) ]
}

const addToCart = (cart, item ) => {
  const cartItem = itemInCart(cart, item)
  return cartItem ===undefined
  ? [ ...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
  : [ ...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1}]
}

const removeFromCart = (cart, item) => {
  return item.quantity === 1
  ? [ ...cartWithoutItem(cart, item) ]
  : [ ...cartWithoutItem(cart, item), { ...item, quantity: item.quantity - 1}]
}

const removeAllFromCart = (cart, item) => {
  return [ ...cartWithoutItem(cart, item) ]
}

// const submitCart = (cart, item) => {
  // const submittedCart = state.cart;
  // return [ ...itemInCart(cart, item) ]
// }

// const getTotal???///????

const cartReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD':
      return addToCart(state, action.payload)

    case 'REMOVE':
    return removeFromCart(state, action.payload)

    case 'REMOVE_ALL':
    return removeAllFromCart(state, action.payload)

    // case 'SUBMIT':
    // return submitCart(state, action.payload)

    default:
    return state;
  }
}
export default cartReducer;
