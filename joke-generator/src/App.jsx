import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [joke,setJoke] = useState("")

  const jokeGenerator = ()=>{
      fetch(`https://sv443.net/jokeapi/v2/joke/Programming?type=single`)
      .then((res) => res.json())
      .then((res) => setJoke(res.joke))
  }

  return (
    <>
    <div className="h-full p-30 w-full flex flex-col items-center">
    <h1 className='text-2xl font-bold'>Generate your joke</h1>
    <button className='bg-white h-10 w-30 text-black m-10 rounded hover:bg-gray-300'
    onClick={()=>{
        jokeGenerator()
    }}
    >Generate</button>
    <textarea 
    className='overflow-hidden outline-none text-white p-4 rounded w-full max-w-md text-center'
    rows="4"
    type='text-area'
    readOnly
    value={joke}
    />
    </div>
      
      
    </>
  )
}

export default App
