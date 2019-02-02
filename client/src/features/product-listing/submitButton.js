import React from 'react'
import axios from 'axios'



export default function SubmitButton(props) {
  return( <button
  onClick={() => {axios.post("/api/cart", props.cart).then(() => {
   {console.log("success")};
 })}
}>Submit</button>
)
}
