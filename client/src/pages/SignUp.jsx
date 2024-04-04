import React from 'react'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold py-6 mt-6'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username'></input>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email'></input>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password'></input>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex mt-5 gap-2'>
        <p>Have and account?</p>
        <Link to={"/"}><span className='text-blue-700'>SignIn</span></Link>
      </div>
    </div>
  )
}

export default SignUp