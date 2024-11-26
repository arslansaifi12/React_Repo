
import React from 'react'
import Child1 from './Child1'


export default function Parent1() {
    const recievedata = (maal)=>{
        console.log(maal);
    }

    const recieveagain = (maal2)=>{
        console.log(maal2);
    
    }

    
  return (
    <div>
        <h1>arslan </h1>
        
        <Child1 senddata={recievedata} sendagain={recieveagain}/>
    </div>
  )
}
