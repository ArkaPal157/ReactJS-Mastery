import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'Arka',
    age: 25,
    address: {
      city: 'Kolkata',
      state: 'WB',
      country: 'India'
    }
  }
  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md' >Vite with Tailwind</h1>
      <Card username="Arka" myArr={newArr} />
      <Card username='Json' post='Staff Engg.' />
      <Card />
    </>
  )
}

export default App
