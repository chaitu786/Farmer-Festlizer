import * as types from "./Actiontypes"

const initstate={
    Products:[],
    User:{},
}


export const AppReducer=(state=initstate,action)=>{
    switch(action.type){
        case types.PRODUCT_SUCCESS:
            return{
                Products:action.payload,
            }
        case types.USER_DATA:
            return{
                User:action.payload
            }
        default:
            return state
    }

}