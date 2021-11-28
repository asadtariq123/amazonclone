import React from 'react'
import Subtotal from '../Componenets/Subtotal/Subtotal'
import "./Checkout.css"
import CurrencyFormat from 'react-currency-format'
import Checkoutproducts from '../Componenets/Checkoutproducts/Checkoutproducts'
import { useSelector } from 'react-redux'


const Checkout = () => {
    const basket = useSelector(state => state.allReducer.basket)
    
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
            <h3>Hello User</h3>
            <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
        <div className="checkoutproducts">
            {
                basket.map((item)=>{
                    return <Checkoutproducts price={item.price} image={item.image} title={item.title} id={item.id} rating={item.rating}/>
                })
            }
            
        </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
            
        </div>
    )
}

export default Checkout
