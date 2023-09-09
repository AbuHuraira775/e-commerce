import { ActionTypes } from "../contants/action-types"
export const setProducts = (products)=>{
    return(
        {
            type: ActionTypes.SET_PRODUCTS,
            payload: products
        }
    )
}

export const selectProducts = (products)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products
    }
}
export const removeselectProducts = ()=>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    }
}