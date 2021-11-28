import React from 'react'
import "./Registration.css"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import useRegistred from './useRegisted'
import { Link } from 'react-router-dom'
const Registration = () => {
    const [name,setname,email,setemail,password,setpassword,ctaRegistered,PreVent] = useRegistred()
    const navigate = useNavigate()
    const what = useSelector(state => state.allReducer.registred)
    console.log(what);
   
    if(what===true){
        navigate('/login') 

    }
    return (
        <>
        
    
    
        <div className="login">
            <Link to="/">
            <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>
                <div className="login__conatiner">
                    <h1>Create Account</h1>
                    <form onSubmit={PreVent}>
                    <h5>Name</h5>
                        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
                        <h5>Email</h5>
                        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} />
                        <h5>Password</h5>
                        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
                        
                    </form>
                    <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
</p>
<button className="login__registered" onClick={ctaRegistered}>Create amazon account</button>
                </div>
        </div>
        </>
    )
}

export default Registration
