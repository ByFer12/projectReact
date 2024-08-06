import { useState } from 'react'
import Header from './components/Header'

import './App.css'
import FormMoney from './components/FormMoney'
import MainControl from './components/MainControl'

function App() {
  const [count, setCount] = useState(0)
  const [isValid, setIsValid] = useState(false)

  const componente=isValid? <MainControl count={count}/>:<FormMoney setCount={setCount} setIsValid={setIsValid}/ >

  return (
   <div className="App">

    <Header/>
    {componente}
    
    <h2>Componente </h2>

   </div>
      

  )
}

export default App
