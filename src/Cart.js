import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { addQty } from "./redux/actions/productActions"
import { deleteFromCart } from "./redux/actions/cartActions"

export default function Cart() {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    return (
        <>
            {cart ? cart.map((item, index) => (
                <>
                    <div class="card" /*style="width: 18rem;"*/>
                        <h5 class="card-title">{item.name}</h5>
                        <img class="card-img-top" src={item.image} alt="Card image cap" style={{ width: "300px", height: "300px" }}></img>
                        <div class="card-body">
                            <p class="card-text">{item.price} :מחיר</p>
                            {/* <p id="description">{item.description}</p> */}
                            <button type="button" class="bg-secondary" onClick={() => { dispatch(deleteFromCart(item)); dispatch(addQty(item.id)) }}>
                                הסר מהעגלה
                            </button>

                        </div>
                    </div>
                </>
            )) : <h1>העגלה ריקה</h1>}
        </>
    )
}