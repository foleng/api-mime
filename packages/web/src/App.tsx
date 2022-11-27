import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useRoutes } from 'react-router-dom'
import Login from '@/pages/login'
import './App.css'
import { routes } from "./router/route";

function App() {
  const [count, setCount] = useState(0);
  const element = useRoutes(routes)

  return (
    <div className="App">
     {element} 
    </div>
  )
}

export default App
