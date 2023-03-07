import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    const[val,setVal] = useState({
        name:"",
        email:"",
        password:""
    })
    const changeFun = (e) =>{
       const{value,name}=e.target;
       setVal((obj)=>{
        return({
            ...obj,
            [name]:value
        })
       })
    }
const submitFun = async(e) =>{
    e.preventDefault()
    let result = await fetch('http://localhost:3000/signup',{
        method:'post',
        body:JSON.stringify(val),
        headers:{'content-type':'application/json'}

    })
    result =await result.json()
     localStorage.setItem('Users',JSON.stringify(result))
     let data=localStorage.getItem('Users')
       
    if(data){
        navigate('/')
            
        }
    
    
}
    
  return (
    <div className='mainsignupForm'>
        <form onSubmit={submitFun} className='signupForm'>
            <input type="text" name='name' onChange={changeFun} placeholder='Enter the name'/>
            <input type="email" name="email" onChange={changeFun} placeholder='Enter the email' />
            <input type="password" name="password" onChange={changeFun} placeholder='Enter the password' />
            <button className='btn'>Sign Up</button>
        </form>
    </div>
  )
}

export default Signup