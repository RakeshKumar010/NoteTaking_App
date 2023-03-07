import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AddNotes = () => {
  const navigate = useNavigate()
  const[val, setVal]= useState({
    topic:"",
    message:""
  })
  const submitFun = async(e) =>{
    e.preventDefault()
    let result = await fetch('http://localhost:3000/Addnotes',{
      method:'post',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(val)
    })
    result = await result.json()
    if(result){
      navigate('/')
    }
   
  }
const changeFun = (e) =>{
  const{name ,value} = e.target;
  setVal((obj)=>{
    return({
      ...obj,
      [name]:value
    })
  })
}


  return (
    <div className='mainAddnotes'>
        <form className='addNotes' onSubmit={submitFun} >
            <input type="text" name='topic' onChange={changeFun} />
            <textarea name="message"placeholder='Massage....' rows="5" onChange={changeFun}></textarea>
            <button className='btn'>ADD</button>
        </form>
    </div>
  )
}

export default AddNotes