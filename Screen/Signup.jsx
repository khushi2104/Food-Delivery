import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [details,setDetails]=useState({name:"",email:"",password:"",geolocation:""});
    const handleEvent = async(e)=>{
         e.preventDefault();
         const response=await fetch("http://localhost:5000/api/createuser",{
            method:"POST",
            headers:{
               "Content-Type":"application/json"
            },
            body:JSON.stringify({name:details.name,email:details.email,password:details.password,location:details.geolocation})
    })      
    const json=await response.json();
    console.log(json);

    if(!json.success){
        alert("Please enter valid details");
    }
    }
    const onChange=(event)=>{
        setDetails({...details,[event.target.name]:event.target.value})
    }
  return (
    <>
    <div className='container'>
      <form onSubmit={handleEvent}>

      <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={details.name} onChange={onChange}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    name='email' value={details.email} onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    name='password' value={details.password} onChange={onChange}/>
  </div>

  <div className="mb-3">
    <label htmlFor="name" className="form-label">Address</label>
    <input type="text" className="form-control" name='geolocation' value={details.geolocation}
    onChange={onChange}/>
  </div>

  
  <button type="submit" className="btn m-3 btn-primary">Submit</button>
  <Link to='/login' className=' btn m-3 btn-danger'>Already a user</Link>
  </form>
  </div>
    </>
  )
}

export default Signup
