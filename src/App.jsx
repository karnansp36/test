import Hero from "./components/hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import { Routes, Route, Link} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Acomponent from "./components/propse/Acomponent"
function App() {
  let user = {name:'john', age:30}
  return (
    <>
   
         <Routes>
                 <Route path="/" element={<Home/>} />
                  <Route path="/about" element={<Navbar/>} />
                  <Route path="/contact" element={<Contact/>} />
                  
         </Routes>
        <Acomponent/>
    </>
  )
}

export default App
