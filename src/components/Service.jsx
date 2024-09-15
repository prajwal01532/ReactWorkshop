import React from 'react'
import {useState} from 'react'

function Service() {
    const [count,setCount]=useState(0)

const increaseCount=()=>
{
    setCount(count +1)
}

const changecount=(e)=>{
  setCount(e.target.value)
}

  return (
    <div>
   <h1 className='text-bold container text-red-500 rounded-full'>This is Service page</h1>
   <button onClick={increaseCount} className='bg-red-500 p-3 rounded-xl text-white'>Increase Count</button>
   <button className='bg-blue-500 p-3 rounded-xl text-white'onClick={()=>{ 
    setCount(0)
   }}>make 0</button>
   
   <div className='p-5 bg-indigo-500 text-center text-white w-[500px] rounded-xl mx-auto '>
    <h1 className='text-5xl font-bold '>{count}</h1>
   </div>
   <ModifyCount increaseCount={increaseCount}/>
   <ChangeCount changecount={changecount}/>
    </div>
  )
}

function ModifyCount(props){
  return(

    <button onClick={props.increaseCount} className='py-2 px-4 bg-red-600 rounded-lg'>Increase Count From Modify</button>
  )

}
function ChangeCount(props){
  return(
  <div>
    <input type='text'className='bg-red-400' onChange={props.changecount}/>
  </div>)
}
export default Service
