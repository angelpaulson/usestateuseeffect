import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './compenents/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasic from './compenents/Statebasic'
import Counter from './compenents/Counter'
import DisplayName from './compenents/DisplayName'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path='/s' element={<Statebasic/>}/>
        <Route path='/c' element={<Counter/>}/>
        <Route path='/d' element={<DisplayName/>}/>
      </Routes>
    </>
  )
}

export default App
