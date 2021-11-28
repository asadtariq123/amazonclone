import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Checkoutproducts from '../Componenets/Checkoutproducts/Checkoutproducts'
import "./Payment.css"
import { CardElement, useStripe,useElements } from '@stripe/react-stripe-js'
    

const Payment = () => {
    const stripe = useStripe()
    const elements = useElements()
    const items = useSelector(state => state.allReducer.basket)
    const user = useSelector(state => state.allReducer.user)
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout (<Link to="/check">{items.length}items</Link>)</h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__adress">
                        <p>{user.map((item)=>{
                            return <p>{item.email}</p>
                        
                        })}</p>
                        <p>Chack No 47 London England</p>
                        <p>03123434567</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Reviews Items and Delivery</h3>
                    </div>
                    <div clas="payment__items">
                        {
                            items.map((item)=>{
                                return <Checkoutproducts price={item.price} image={item.image} title={item.title} id={item.id} rating={item.rating} />
                                
                            })
                        }
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form>
                            <CardElement />
                            <div><button>Buy Now</button></div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Payment
