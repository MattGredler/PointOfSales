import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import SubmitButton from '../product-listing/submitButton'

const sort = items => {
  return items.sort((a, b) => {
    if (a.id !== b.id) {
      return a.id - b.id;
    }
  });
};



// function sort(items) {
//   return items.sort((a, b) => a.id < b.id)
// }
// export const cartItemsWithQuantities = (cartItems) => {
//   return cartItems.reduce((acc, item) => {
//     const filteredItem = acc.filter(item2 => item.id === item.id)[0]
//     filteredItem !== undefined
//     ? filteredItem.quantity++
//     : acc.push({...item, quantity: 1})
//     return acc
//   }, [])
// }


function cart(props) {
  let total = 0;
props.cart.forEach(i =>{
  total += i.price * i.quantity;

})
  // console.log(props);
  return <table>
  <thead>
  <tr>
  <th>Item</th>
  <th>Quantity</th>
  <th>Price</th>
  <th></th>
  <th></th>
  </tr>
  </thead>
  <tbody>
  {
    sort(props.cart).map(item => <tr>
      <td>{ item.name }</td>
      <td className="cartQuantity">{ item.quantity }</td>
      <td>${ item.price }</td>
      <td>
        <button
        onClick={() => props.addToCart(item)}
        >+</button>
      </td>
      <td>
      <button
      onClick={() => props.removeFromCart(item)}
      >-</button>
      </td>
      <td>
        <button
        onClick={() => props.removeAllFromCart(item)}
        >
          Remove all from cart
        </button>
      </td>
    </tr>
  )}
  <tr>
    <th>
Total
    </th>
    <td>
    </td>
    <td>
    ${parseFloat(total).toFixed(2)}
    </td>
    <SubmitButton />
  </tr>
  </tbody>
  </table>
}



function mapStateToProps(state) {
  return{
    cart: state.cart
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD' , payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE' , payload:item })
    },
    removeAllFromCart: (item) => {
      dispatch({ type: 'REMOVE_ALL' , payload:item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(cart)
