import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/hero/Hero'
import About from './About'
import Contact from './Contact'

export default function Home() {
  const user = "manager"
  const login = true
 if (user == "admin"){
    return (
      <About/>
    )
 }
 else if (user == "manager"){
  return(
    <>
    {
      login && <h1>This is true </h1>
    }
    <h1>heading</h1>
    </>
  )
 }
}
