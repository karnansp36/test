import React from 'react'
import {useSelector} from 'react-redux'
export default function Contact() {
  const user = useSelector((state) => state.counter.value)
  return (
    <div>
      <h1>This is contact</h1>
      <p>User: {user}</p>
    </div>
  )
}
