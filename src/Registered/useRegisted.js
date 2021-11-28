import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { doSignIn } from '../Redux/Actions'
import { useNavigate } from 'react-router'

const useRegistred= () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [name,setname] = useState('')
    
    const ctaRegistered = () =>{
        console.log(name,email,password);
        let userdata = {
            name,
            email,
            password
        }
        console.log(userdata);
        dispatch(doSignIn(userdata))
        setname('')
        setemail('')
        setpassword('')
        // navigate("/login")


    }
    const PreVent = (e) =>{
        e.preventDefault()
    }
    
    
    return [name,setname,email,setemail,password,setpassword,ctaRegistered,PreVent]
}

export default useRegistred
