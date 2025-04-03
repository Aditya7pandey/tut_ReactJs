import { useState } from 'react'
import Colorbox from './components/Colorbox'

function App() {
  const [color,setColor] = useState('olive')


  return (
    <div className="h-screen w-full duration-200 flex justify-center" style={{backgroundColor:color}}>
      <div className='rounded-lg h-20 w-190 m-5 flex bg-black items-center justify-between'>
          
          <Colorbox color='red' onClick={setColor} />
          <Colorbox color='blue' onClick={setColor}/>
          <Colorbox color='green' onClick={setColor}/>
          <Colorbox color='yellow' onClick={setColor}/>
          <Colorbox color='orange' onClick={setColor}/>
      </div>
    </div>
      
  )
}

export default App
