import React from 'react'
import Bcomponent from './Bcomponent'
import {createContext} from 'react'

export const userContext = createContext()

export default function Acomponent() {
  return (
    <div>
      <userContext.Provider value={{name:"john"}}>  
                <Bcomponent />
       </userContext.Provider>

    </div>
  )
}
