import { useState } from 'react'


import Header from './Components/Header/Header'
import Dream from './Components/Dream/Dream'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
     <Header></Header>
     <Dream></Dream>
    </div>
  )
}

export default App
