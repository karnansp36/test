import {useState, useEffect} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';


export default function Home() {
  const [data, setData] = useState({username:'', email:'', password:''})
  const [response, setResponse] = useState([])
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
    console.log(data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3000/users', data)
    .then(res =>{
      toast("successfully created")
      console.log(res)
    } )
    .catch(err => console.log(err))

     fetchData()
  }

  const fetchData = async () => {
   let response =  await axios.get('http://localhost:3000/users')
    console.log(response.data)
    setResponse(response.data)
  }
  const handleDelete = async (id) => {
                  await axios.delete(`http://localhost:3000/users/${id}`)
                  .then(res => console.log(res))
                  .catch(err => console.log(err))
                  fetchData()
                }

  const handleUpdate = async (id) => {
    await axios.put(`http://localhost:3000/users/${id}`, data)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <ToastContainer />
        <h1>Home</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='username' name='username' onChange={handleChange} />
            <input type="email" placeholder='email' name='email' onChange={handleChange} />
            <input type="password" placeholder='password' name='password' onChange={handleChange} />
            <button>signup</button>
        </form>
        {
          response.map((value, index, arr)=>(
              <div key={index}>
                <h1>{value.username}</h1>
                <p>{value.email}</p>
                {value.id}
                <button onClick={() => handleDelete(value.id)}>Delete</button>
                <button onClick={() => handleUpdate(value.id)}>Update</button>
              </div>
          ))
        }
        <button >Fetchdata</button>
    </div>
  )
}
