import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import useLogin from './useLogin'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'


const Login = () => {
    const navigate = useNavigate()
    const islogin = useSelector(state => state.allReducer.isLogin)
    if(islogin){
        navigate("/")
    }
    
    
    // if(what===true){
    //     navigate('/')

    // }
    const [email,setemail,password,setpassword,ctaLogin,PreVent] = useLogin()
    //console.log(email,password);
    return (
        <div className="login">
            <Link to="/">
            <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>
                <div className="login__conatiner">
                    <h1>Sign In</h1>
                    <form onSubmit={PreVent}>
                        <h5>Email</h5>
                        <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} />
                        <h5>Password</h5>
                        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
                        <button type="submit" onClick={ctaLogin} className="login__button">Sign In</button>
                    </form>
                    <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
</p>
<Link to="/registration"><button className="login__registered">Create amazon account</button></Link>
                </div>
        </div>
    )
}

export default Login
