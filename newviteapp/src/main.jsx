import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'
import { Children } from 'react'

function MyApp(){
  return(
    <h1>I am direct function</h1>
  )
}

const newObj = (
  <a href="https:www.google.com" target="_blank">Visit Google</a>
)

function NewA(){
  return(newObj)
}

const newDom = React.createElement('h1', {}, 'Hello World')

ReactDOM.createRoot(document.getElementById('root')).render(
  
    newDom 
   
)
