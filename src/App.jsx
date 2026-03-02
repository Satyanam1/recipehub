import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './Nav'

const App = () => {
  return (
    <div className='bg-gray-800 w-full h-full text-white font-thin '>

      <Nav />

      <Mainroutes />

    </div>
  )
}

export default App
