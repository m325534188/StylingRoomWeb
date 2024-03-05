import a from "../../images/a.jpg";
import img2 from "../../images/אגרטל לתלייה.webp"
const initialState = [
    {
        id: 1,
        name: "עציץ",
        qty: 50,
        image:a,
        price: 70,
        description: "gfh"
    },
    {
        id: 2,
        name: "כריות נוי",
        qty: 30,
        image: img2,
        price: 47,
        description: "כרית יפיפיה לספה  החדשה"
    }
    // {id:3,name:"ספת נוי",qty:27,image:,price:152,description:"ספת"},
    // {id:4,name:" שטיח אמבט",qty:60,image:,price:435,description:},
    // {id:5,name:"דובי",qty:120,image:,price:,description:},
    // {id:6,name:"סבון בניחוח לבנדר",qty:80,image:,price:,description:},
    // {id:6,name:"שטיח ברוכים הבאים ",qty:140,image:,price:,description:},
    // {id:6,name:"סבון סמילי  ",qty:65,image:,price:,description:},
    // {id:6,name:"סבון דובון  ",qty:36,image:,price:,description:}
]
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DECREASE_QTY":
            const newProducts = [...state]
            newProducts[action.index].qty--
            return newProducts
        case "ADD_QTY":
            const newProducts2 = [...state]
            newProducts[action.index].qty++
            return newProducts2
        default:
            return state
    }
}
export default productsReducer