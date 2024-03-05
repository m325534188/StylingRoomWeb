
const initialState = []
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [...state,action.newProduct]
        case "DELETE_FROM_CART":
             return state.filter((item,id)=>id!==action.id)
        default: return state

    }

}
export default cartReducer