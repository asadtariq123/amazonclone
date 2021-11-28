import React from 'react'
import "./Checkoutproducts.css"
import { useDispatch } from 'react-redux'
import { removebasketitemaction } from '../../Redux/Actions'

const Checkoutproducts = ({id,price,rating,image,title}) => {
    const dispatch = useDispatch()
    const removebasketitem = (id) =>{
        dispatch(removebasketitemaction(id))
    }

    return (
        <div className="checkproduct" >
            <img src={image} className="checkproduct__image" />
            <div className="checkproduct__info">
                <p className="checkproduct__title">{title}</p>
                <p className="checkproduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkproduct__rating">
                {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
                </div>
                <button onClick={()=>removebasketitem(id)}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default Checkoutproducts
