import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux'
import { getBasketTotal } from '../../Redux/allReducers'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Subtotal = () => {
  const navigate = useNavigate();
const total = useSelector(state => state.allReducer.basket) 
//console.log("total in subtotal",total);
const len = total.length
//console.log(len);

    return (
        <div className="subtotal">
            <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({len} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(total)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
       <Link to="/payment" ><button className="process">Proceed to Checkout</button></Link> 
        </div>
    )
}

export default Subtotal
