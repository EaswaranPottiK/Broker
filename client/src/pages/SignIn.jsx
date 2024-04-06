import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const SignIn = () => {
  const [formData,setFormData] = useState({})
  const [error,setError] = useState(null)
  const [loading,setLoading] =useState(false)
  const navigate = useNavigate()
  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    })
  }
  
  const handleSubmit =async (e)=>{
    e.preventDefault();
    try{
      setLoading(true)
    const res = await fetch('api/auth/signin/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData) //we use stringify to make this more secure 
    })
    const data = await res.json();
    setLoading(false)
    setError("")
    if (data.success===false){
      setError("Duplicate record found !")
      return
    } 
    navigate('/')
  }
    catch(error){
      setError(error)
      setLoading(false)
    }
    
    
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold py-6 mt-6'>Sign In</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input onChange={handleChange} type='email' placeholder='email' className='border p-3 rounded-lg' id='email'></input>
        <input onChange={handleChange} type='password' placeholder='password' className='border p-3 rounded-lg' id='password'></input>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? "Loading...":"Sign Up"}
        </button>
      </form>
      <div className='flex mt-5 gap-2'>
        <p>Dont have an account?</p>
        <Link to={"/sign-up"}><span className='text-blue-700'>Sign Up</span></Link>
      </div>
      {error ? <p className='text-red-700'>{error}</p>:""}
    </div>
  )
}

export default SignIn