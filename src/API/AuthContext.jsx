/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { createContext , useContext } from 'react'

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

//create, provide and use - Context API

//1. creating the context
const AuthContext = createContext()

function AuthContextProvider({children}) {

  
  const [user, setUser] = useState({})

  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
    })

    return ()=>{
      unsubscribe()
    }
  },[])


  function signUp(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
  }

  function login(email,password){
    return signInWithEmailAndPassword(auth,email,password)
  }


  function logout(){
    return signOut(auth)
  }
    

    

  return (
    <>
      {/*  creating the provider */}
      <AuthContext.Provider value={{user, signUp , login, logout}}>
          {children}
      </AuthContext.Provider>
    </>
  )
}

export function UserAuth(){
  return useContext(AuthContext)
}

export default AuthContextProvider;