import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Nav = () => {
  const navigate = useNavigate()

  let auth = localStorage.getItem('Users')
  auth = JSON.parse(auth)
  return (
    <div className='mainnav'>
      { auth? <ul className='nav'>
     
      <Link to='/'>Notes</Link>
        <Link to='/Addnotes'>Add Notes</Link>
        <Link to='/About'>About</Link>
        <button className='logoutbtn' onClick={()=>{
          let del = localStorage.clear('Users')
        navigate('/Login')
        }}>Logout ({auth.name})</button>
    
        </ul>:
        <ul className='nav'>
            <Link to='/Signup'>SignUp</Link>
            <Link to='/Login'>LogIn</Link>
       
        </ul>}
    </div>
  )
}

export default Nav