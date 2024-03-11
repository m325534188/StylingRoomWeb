
const initialState = []
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            action.newProduct.qtyCart++
            if (action.newProduct.qtyCart > 1) {
                return state
            }
            return [...state, action.newProduct]

        case "DELETE_FROM_CART":
            action.product.qtyCart--
            if (action.product.qtyCart >= 1) {
                return state
            }
            return state.filter((item) => item !== action.product)
        case "DELETE_TOTAL_FROM_CART":
            return state.filter((item) => item !== action.product)
        default: return state
    }

}
export default cartReducer