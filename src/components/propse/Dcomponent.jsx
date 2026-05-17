import React, { useContext } from 'react'
import { userContext } from './Acomponent'

export default function Dcomponent() {
    const user = useContext(userContext)
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  )
}


