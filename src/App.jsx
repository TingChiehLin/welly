import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count + 1)
  } 

  const handleDecrease = () => {  
    setCount(count - 1)
  } 

  const handleReset = () => {
    setCount(0)
  }

  return (
    <>
      <h1>Welly Counter: {count}</h1>
      <div className="button-container">
        <Button title={"Increase"} onClick={handleIncrease}/> 
        <Button title={"Decrease"} disabled={count === 0} onClick={handleDecrease}/> 
        <Button title={"Reset"} disabled={count === 0} onClick={handleReset}/> 
      </div>
    </>
  )
}

export default App
