let intialstate = {
    basket: [],
    user : [],
    isLogin : false,
    registred : false
}
export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);
const allReducer = (state = intialstate, action) => {

    switch (action.type) {
        case "TO_BASKET":
            //console.log("data in reducer", action.payload)
            let newbasket = state.basket;
            newbasket.push(action.payload)
            return {
                ...state,
                basket: newbasket

            }
            case "REMOVE":
                let removed = state.basket.filter((item)=>item.id !== action.payload)
                return{
                    ...state,
                    basket : removed

                }
                case "SIGN_IN":
                    console.log(action.payload)
                    return {
                        
                        ...state,
                        isLogin : true,
                        user : action.payload
                    }
                    case "SIGNOUT":
                        return{
                            ...state,
                            isLogin : false,
                            user : null
                        }
                        case "Registration":
                            return{
                                ...state,
                                registred : true
                            }


        default:
            return state
    }

}
export default allReducer