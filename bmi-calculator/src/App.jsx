import { useState } from 'react'
import './App.css'

function App() {
  const [weight,setWeight] = useState()
  const [height,setHeight] = useState()

  const [bmi,setBmi] = useState("")
  const [status,setStatus] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    let x = Number(height)/100
    const bmiValue = Number(weight)/(x*x)
    setBmi(bmiValue.toFixed(2))
    if(bmiValue>21){
      setStatus("OverWeight")
    }
    else if(bmiValue<17){
      setStatus("UnderWeight")
    }
    else{
      setStatus("Normal")
    }
  }
  return (
    <>
      <h1>BMI Calculator</h1>
      <div className="flex justify-center mt-5">
        <form className='flex justify-center flex-col w-100'>
        <label>Weight(kg)</label>
        <input 
        type='number'
        className='border'
        value={weight}
        onChange={(e)=>{
          setWeight(e.target.value)
        }}
        />
        <label>Height(cm)</label>
        <input
        type='number'
        className='border'
        value={height}
        onChange={(e)=>{
          setHeight(e.target.value)
        }}
        />

        <input
        type='submit'
        value= "submit"
        className="bg-green-500 w-30 mt-5 mb-5 ml-35 h-8"
        onClick={(e)=>{
          handleSubmit(e)
        }}
        />
      </form>
      </div>
      
      <input
      type='text'

      readOnly
      value={`Your BMI : ${bmi}`}
       />

       <input
       type='text'
       readOnly
       value={`Status : ${status}`} />
    </>
  )
}

export default App
