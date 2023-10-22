import React ,{useState}from 'react'
import { Link ,useNavigate} from 'react-router-dom'
const Login = () => {

  const [details,setDetails]=useState({email:"",password:""});
  let navigate=useNavigate();
  const handleEvent = async(e)=>{
       e.preventDefault();
       const response=await fetch("http://localhost:5000/api/loginuser",{
          method:"POST",
          headers:{
             "Content-Type":"application/json"
          },
          body:JSON.stringify({email:details.email,password:details.password})
  })      
  const json=await response.json();
  console.log(json);

  if(!json.success){
      alert("Please enter valid details");
  }
  if(json.success){
    navigate("/");
  }
  }
  const onChange=(event)=>{
      setDetails({...details,[event.target.name]:event.target.value})
  }


  return (
    <>
      <h3>Login</h3>

      <div className='container'>
      <form onSubmit={handleEvent}>

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

  <button type="submit" className="btn m-3 btn-primary">Submit</button>
  <Link to='/createuser' className=' btn m-3 btn-danger'>New user</Link>
  </form>
  </div>
    </>
  )
}

export default Login
