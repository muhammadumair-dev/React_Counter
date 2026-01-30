import React, { useState } from 'react'
import {ChevronUp} from 'lucide-react'
import {ChevronDown} from 'lucide-react'

function App() {
  const [num, setnum] = useState(0)
  function   increase(){
  setnum(num+1)
    
  }
  function decrease(){
if(num > 0) {
 setnum(num - 1)

}
   

  }
    function jumpfive(){
   setnum(num+5)
    

  }
  

  return (
    <div className='flex hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-xl transition-shadow duration-300 flex-col rounded-full justify-self-center self-center my-40  items-center w-fit bg-blue-900'>
      <div onClick={increase} className='active:scale-95 transition-transform duration-150"'><ChevronUp size={120} color='white' /></div>
      <h1 className='text-8xl text-amber-50'>{num}</h1>
      <div onClick={decrease} className='active:scale-95 transition-transform duration-150"'><ChevronDown size={120} color='white'  /></div>
  
    </div>
  
  )
}

export default App
