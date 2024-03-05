import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { addToCart } from "./redux/actions/cartActions"
import { decreaseQty } from "./redux/actions/productActions"

export default function Shop() {
    const products = useSelector((state) => state.products)
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    return (
        <>
            {products ? products.map((item, index) => (
                <>
                    <div class="card" /*style="width: 18rem;"*/>
                    <img class="card-img-top" src={item.image} alt="Card image cap" style={{width:"200px",height:"200px"}}></img>
                      <center> 
                        <div class="card-body">
                            <h5 class="card-title">{item.name}</h5>
                            <p class="card-text">price:{item.price}</p>   
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  product details
</button>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">product details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">Close</button>
      </div>
      <div class="modal-body">
      {item.description}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  onClick={()=>{dispatch(addToCart(item));dispatch(decreaseQty(item.id))}}>Add to cart</button>
      </div>
    </div>
  </div>
</div>
         </div>
       </center> 
                      
      </div>
                </>
            )) : <div>Products is null</div>}
        </>
    )
}