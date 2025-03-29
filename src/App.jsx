import React from 'react'
import Home from './components/pages/Home/Home'
import { Route,Routes } from 'react-router-dom'
import Login from './components/pages/Login/login'

const App = () => {
  return (
    <>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
    </Routes>
    

    </>
   
  )
}

export default App