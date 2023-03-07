
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const Update = () => {
    const params = useParams()

        const [topic,setTopic]= useState()
        const [message,setMessage]=useState()
        
    const navigate = useNavigate()
    const updateData = async() =>{
        let result = await fetch(`http://localhost:3000/update/${params.id}`)
        result = await result.json()
        console.log(result)

        setTopic(result.topic)
        setMessage(result.message)
       
    }
    useEffect(()=>{
       
        updateData()
       
    },[])
   
 
const submitFun = async(e) =>{
    e.preventDefault()
    let result = await fetch(`http://localhost:3000/update/${params.id}`,{
        method:'put',
        body:JSON.stringify({topic,message}),
        headers:{'content-type':'application/json'} 
    })
    result = await result.json()
    console.log(result)
    navigate('/')

}

    return (
        <div className='mainAddnotes'>
   <form className='addNotes' onSubmit={submitFun} >
        <h1>{topic}</h1>
        <input type="text"  onChange={(e)=>{
            let value = e.target.value;
            setTopic(value)
        }} name='topic' value={topic} />
        <textarea placeholder='Massage....' rows="5" onChange={(e)=>{
            let value = e.target.value;
            setMessage(value)
        }} name="message" value={message}></textarea>
        <button className='btn'>ADD</button>
  </form>
 </div>
    )
}

export default Update
















































// 
//     useEffect(()=>{
//         updateFun()
//     },[])
//     const updateFun =async() =>{
//         let result = await fetch(`http://localhost:8080/update/${params.id}`)
//         result = await result.json()
      
//         setTopic(result.topic)
//         setMessage(result.message)
//     }
   
//     const submitFun =async (e) =>{
//         e.preventDefault()
//         let result = await fetch(`http://localhost:8080/update/${params.id}`,{
//             method:'put',
//             headers:{'content-type':'application/json'},
//             body:JSON.stringify({topic,message})
//         })
//         result = await result.json()
        

//     }
//     const changeFun = (e) =>{
//         const{value,name}= e.target;
//         if(name=='topic'){
//             setTopic(value)
//         }else if (name=='message'){
//             setMessage(value)
//         }
//     }
//   return (
//     
//   )
// }
