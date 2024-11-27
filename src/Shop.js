import {useSelector, useDispatch } from "react-redux"
import { addToCart } from "./redux/actions/cartActions"
import { decreaseQty } from "./redux/actions/productActions"

export default function Shop() {
  const products = useSelector((state) => state.products)
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  return (
    <>
    <div id="container">
      {products ? products.map((item, index) => (
        <>
          <div className="card" /*style="width: 18rem;"*/>
          <h5 className="card-title">{item.name}</h5>
            <img className="card-img-top" src={item.image} alt="Card image cap" style={{ width: "300px", height: "300px" }}></img>
              <div className="card-body">
                <p className="card-text">{item.price} :מחיר</p>
                <p id="description">{item.description}</p>
                <button type="button" className="bg-secondary" onClick={() => { dispatch(addToCart(item)); dispatch(decreaseQty(index)) }}>
                  הוסף לעגלה
                </button>
          </div>
          </div>
        </>
      )) : <div>Products is null</div>}
      </div>
    </>
  )
}