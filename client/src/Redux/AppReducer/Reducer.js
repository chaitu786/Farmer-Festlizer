import * as types from "./Actiontypes"

const initstate={
    Products:[],
    Cart:[],
    Posts:[]
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
        case types.MY_POSTS_DATA:
            return{
                Posts:action.payload
            }
        default:
            return state
    }

}