import React from 'react'
import AddButton from './addButton'
import RemoveButton from './removeButton'

export default function ProductListItem(props) {
  // const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0]

  return <div className='product-list-item'>
    <h3>
    { props.name }
    </h3>
    <img
    alt= "https://thumbs.dreamstime.com/z/error-press-ctrl-alt-del-blackboard-chalk-write-89539177.jpg"
    height={100}
    title={ props.product.name }
    src={`${props.product.image}`}
     />
     <div><strong>{ props.product.name }</strong></div>
     <div>{ props.product.description }</div>
     <div>${ props.product.price }</div>
     <div>

      <AddButton cartItem={props.cartItem} product={props.product} addToCart={props.addToCart} />

      {
        props.cartItem
        ?<RemoveButton
        cartItem={props.cartItem}
        product={props.product}
        removeFromCart={props.removeFromCart} />
        : null
      }

     </div>

  </div>
}
