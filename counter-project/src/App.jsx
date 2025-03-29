import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){

  let [counter, setCounter] = useState(14);
   const addNumber = () => {
   counter = counter+1;
   if(counter>20){
    alert("Counter value is greater than 20");
    counter = 20;
   }
   setCounter(counter);

  }
  const removeNumber = ()=>{

    counter--;
    if(counter<0){
      alert("Counter value is less than 0");
      counter = 0;
    }
    setCounter(counter);
  }

  return(
    <>
    <h1>Chai Aur React</h1>
    <h3>Counter Application with base value{counter}</h3>
    <h2>{counter}</h2>
    <button
    onClick={addNumber}>Add Number</button> <br /><br />
    <button onClick ={removeNumber}>Remove Number</button>
    </>
  )
}

export default App;