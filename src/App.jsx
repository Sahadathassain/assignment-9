import { useState } from 'react'


import Header from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
     <Header></Header>
    </div>
  )
}

export default App
