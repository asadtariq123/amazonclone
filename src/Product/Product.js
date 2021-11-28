import React from 'react'
import "./Product.css"
import { useDispatch } from 'react-redux'
import { toBasketdata } from '../Redux/Actions'
const Product = ({title,price,rating,image,id}) => {
    const dispatch = useDispatch();
    const toBasket = () =>{
        //console.log(title,price,image,rating,id);
            let item = {
                title,
                price,
                image,
                rating,
                id
            }
            dispatch(toBasketdata(item))
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="product__rating">
                {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
                </div>
            </div>
            <img src={image}/>
            <button onClick={toBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
