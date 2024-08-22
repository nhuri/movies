import React, { useState } from 'react'

const Counter = () => {
    const [counterValue,setcounterValue] = useState(0)
  return (
    <div>
        <h1>{counterValue}</h1>
        <input onChange = {(e)=> setcounterValue(e.target.value||0)} type="number" value={counterValue}/>
        <button onClick={()=> setcounterValue(counterValue+1)}>+</button>
        <button onClick={()=> setcounterValue(counterValue-1)}>-</button>
    </div>
  )
}

export default Counter