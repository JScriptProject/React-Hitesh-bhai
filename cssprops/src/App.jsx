import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-300 rounded-xl p-4'>Hello world</h1>
      <Card userName="Chai Aur Code" btnText="Click Me"/>
      <Card userName="Ravindra" />
    </>
  )
}

export default App
