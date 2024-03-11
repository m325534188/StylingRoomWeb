

export const addToCart=(newProduct)=>{
    return{
        type:"ADD_TO_CART",
        newProduct
    } 
}
export const deleteFromCart=(product)=>{
    return{
        type:"DELETE_FROM_CART",
        product
    }
}
export const deleteTotal=(product)=>{
    return{
        type:"DELETE_TOTAL_FROM_CART",
        product
    }
}