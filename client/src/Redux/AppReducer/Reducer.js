import * as types from "../AppReducer/Actiontypes"

const initstate={
    Loading:false,
    Products:[],
    User:[],
    Error:false
}


export const AppReducer=(state=initstate,action)=>{
    switch(action.type){
        case types.PRODUCT_REQUEST:
            return{
                Loading:true,
                Error:false
            }
        case types.PRODUCT_SUCCESS:
            return{
                Loading:false,
                Products:action.payload,
                Error:false
            }
        case types.PRODUCT_FALIURE:
            return{
                Loading:false,
                Error:true
            }
        case types.USER_DATA:
            return{
                User:action.payload
            }
        default:
            return state
    }

} 