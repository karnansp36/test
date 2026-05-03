import React, { useContext } from 'react'
import styles from  './Navbar.module.css'
import { userContext } from '../propse/Acomponent'
export default function Navbar() {
  let container = {backgroundColor:'red', color:'white'}
  const user = useContext(userContext)
  return (
    <div>
      <h1 className={styles.container} >Navbar</h1>
      <h1>{user.name}</h1>
    </div>
  )
}
