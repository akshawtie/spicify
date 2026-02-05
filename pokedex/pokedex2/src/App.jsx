import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokedexv1 from '../components/Pokedexv1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <><h1>hello</h1>
    <Pokedexv1></Pokedexv1>
    </>
  )
}

export default App
