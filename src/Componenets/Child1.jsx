
import React from 'react'

export default function Child1({senddata , sendagain}) {
    const dattransfer = ()=>{
        senddata("I am arslan");

        sendagain("kaif again")
    }
  return (
    <div>
       <h1>kaif</h1>

       <button onClick={dattransfer}>click met send data</button>

       
        
    </div>
  )
}
