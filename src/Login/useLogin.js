import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { doLogin } from '../Redux/Actions'

const useLogin = () => {
    const dispatch = useDispatch()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const ctaLogin = () =>{
        
        dispatch(doLogin(email,password))
        setemail('')
        setpassword('')

    }
    
    const PreVent = (e) =>{
        e.preventDefault()
    }
    
    
    return [email,setemail,password,setpassword,ctaLogin,PreVent]
}

export default useLogin
