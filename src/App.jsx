import React, { useState } from 'react'
import Card1 from './pratice/Card1'
import Card2 from './Pratice/card2'
import './App.css'


function App() {
 const [showValue , setshowValue] = useState(true)
 let template;
 
 
 if (showValue){
     template = <Card1/>
 }
 else{
     template= <Card2 />
 }

  return (
    <div className='w-full h-full flex justify-center align-center '>
  
      {template}

    </div>
  )
}

export default App
