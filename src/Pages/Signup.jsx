
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../API/AuthContext'
 
function Signup() {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  const {user, signUp} = UserAuth()
  const navigate = useNavigate()
 
  async function handleSubmit(e) {
    e.preventDefault()
    console.log("form submission")
    console.log(email,password)
 
    try{
      await signUp(email,password)
      navigate('/')
    }catch(err){
      console.log(err)
    }
 
  }
 
 
  return (
   <>
    <div className='w-full h-full'>
 
      <img className='block w-full h-full absolute object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
 
      {/* backdrop effect */}
      <div className='bg-black/60 top-0 left-0 w-full h-screen fixed' />
 
      {/* SIGN UP FORM */}
 
      <div className='w-full h-full py-24 px-6 fixed'>
        <div className='max-w-[500px] h-[600px] bg/black/60 rounded mx-auto'>
            <div className='max-w-[250px] mx-auto py-15'>
              <h1  className='text-3xl font-bold'>Sign up</h1>
 
      {/* Sign up Form */}
              <form onSubmit={handleSubmit}  className='py-4 w-full flex flex-col'>
 
                <input value={email} className='py-2 my-2 rounded bg-gray-300 px-2' type='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
                <input value={password} className='py-2 my-2 rounded bg-gray-300 px-2' type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
 
                <button className='bg-red-600 rounded px-4 py-2 my-6'>
                  Sign Up
                </button>
 
                <p className='text-gray-400'>Already have an account ? <span className='text-white px-2'> <Link to= "/login">Login</Link></span></p>
              </form>
             
            </div>
        </div>
      </div>
 
    </div>
   </>
  )
}
 
export default Signup