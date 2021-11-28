import React from 'react'
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch ,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { auth } from '../Configration/firebase'
import { signoutho } from '../Redux/Actions'
import { useDispatch } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()
    const signout = () =>{
        dispatch(signoutho())
    }

    
    const items = useSelector(state => state.allReducer.basket)
//console.log("total in subtotal",total);
const what = useSelector(state => state.allReducer.user)
// const username = what.name
// console.log("want to show here",username);
// what.map((item)=>{
//     return console.log(item.name); 
const islogin = useSelector(state => state.allReducer.isLogin)
     console.log(islogin);

// })
     
    return (
        <div className="header">
            <Link to="/">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header_img" alt="amazon" />
            
            </Link>
            <div className="header__search">
                <input type="text" className="search__input" />
                <FontAwesomeIcon icon={faSearch} className="header__input" />
                
            </div>
            <div className="header__nav">
                <div onClick={signout}>
                <Link to={!islogin && '/login'}>
                <div className="header__option">
                    {
                        islogin ? <>
                        <span className="header__optionlineone">Hello {what.map((item)=>{
                            return <span>{item.name.toUpperCase()}</span>
                        })}</span>
                        <span>Sign Out</span>
                        </>
                        : 
                        <>
                        <span className="header__optionlineone">Hello Dear</span>
                        <span className="header__optionlinetwo">Sign In</span>
                        </>
                    }
                    
                </div>
                </Link>
                </div>
                <div className="header__option">
                    <span className="header__optionlineone">Returns</span>
                    <span className="header__optionlinetwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionlineone">Your</span>
                    <span className="header__optionlinetwo">Prime</span>
                </div>
                
                <div className="header__basket">
                <Link to="check">  
                    <span className="header__optionlineone"> <FontAwesomeIcon icon={faShoppingCart} size="2x" />  </span>
                    
                    
                    <span className="header__optionlinetwo basketcount">{items.length}</span>
                    </Link>
                </div>
                
            </div>
            
            
        </div>
    )
}

export default Header
