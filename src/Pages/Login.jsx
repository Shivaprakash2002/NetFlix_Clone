import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../API/AuthContext'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  const {user, login} = UserAuth()
  const navigate = useNavigate()
 
  async function handleSubmit(e) {
    e.preventDefault()
    console.log("form submission")
    console.log(email,password)
 
 
    try{
      await login(email,password)
      navigate('/')
    }catch(err){
      console.log(err)
    }
  }
  let image = "https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg";
  return (
    <> 
      <div style={{ backgroundImage: `url(${image})`, }} className=' object-contain fixed top-0 bottom-0 left-0 right-0 -z-10'>
         <div className='bg-black/60 top-0 left-0 w-full h-screen fixed' />
      </div>
      <div className=' bg-black/80'/>
    <div className='flex justify-center items-center h-[100vh]'>
     <div className='h-[500px] w-[400px] bg-black bg-opacity-90 rounded'>
          <form className=' p-14 flex flex-col' onClick={handleSubmit}>
             <div className=' text-white font-bold text-2xl pb-5'>Sign In</div>
             <input type="email" name="email" id="email" className=' bg-gray-700 mb-3 h-12 rounded pl-4' placeholder='Email or Phone number' onChange={(e) => setEmail(e.target.value)}/>
             <input type="password" name="password" id="password" className=' bg-gray-700 mb-3 h-14 rounded pl-4' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
             <button type="submit" className=' bg-red-600 text-white h-12 rounded font-bold mt-6'>Sign In</button>
          <div className=' flex justify-between'>
            <div>
              <input id="checked-checkbox" type="checkbox" className="w-4 h-4 mt-3 focus:bg-slate-500" />
              <label for="checked-checkbox" className=" text-white ml-1 text-sm">Remember me</label>
            </div>
            <a href="#" className='text-white mt-3 text-sm hover:underline'>Need Help?</a>
          </div>
          </form>
        <div className=' text-gray-500 ml-16'>
           New to Netflix? 
           <a className=' text-white'>
            <Link to='/signup'>Sign up now</Link>
            </a>
        </div>
     </div>
    </div>
    </>
  )
}

export default Login