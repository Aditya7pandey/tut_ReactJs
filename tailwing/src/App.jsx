import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  return (
    <>
      <h1 className='bg-amber-400 mb-4'>Tailwind is working</h1>
      
      <Card userName="aditya" />
    </>
  )
}

export default App
