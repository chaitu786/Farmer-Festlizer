import * as types from "./Actiontypes"

const initstate={
    Products:[],
    Cart:[],
}


export const AppReducer=(state=initstate,action)=>{
    switch(action.type){
        case types.PRODUCT_SUCCESS:
            return{
                Products:action.payload,
            }
        case types.CART_DATA:
            return{
                Cart:action.payload
            }
        default:
            return state
    }

}