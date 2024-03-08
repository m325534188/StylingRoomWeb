export const decreaseQty = (index) => {
    return {
        type: "DECREASE_QTY",
        index
    }

}
export const addQty = (id) => {
    return {
        type: "ADD_QTY",
        id
    }
}