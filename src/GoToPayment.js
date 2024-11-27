import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function GoToPayment() {
    // useEffect(() =>
    // {
    //     alert("האם אתה בטוח שתרצה לעבור לתשלום? ");
    // }
    // )
    alert("האם אתה בטוח שתרצה לעבור לתשלום? ");
    const cart = useSelector((state) => state.cart)
    const totalAmount = cart.reduce((acc, cart) => acc + (cart.qtyCart * cart.price), 0);
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">שם</th>
                        <th scope="col">מחיר</th>
                        <th scope="col">תמונה</th>
                        <th scope="col">כמות</th>
                    </tr>
                </thead>
                {cart ? cart.map((item, index) => (
                    <tr>

                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><img className="card-img-top" src={item.image} alt="Card image cap" style={{ width: "100px", height: "120px" }}></img></td>
                        <td>{item.qtyCart}</td>
                    </tr>
                )) : <h1>העגלה ריקה</h1>}
            </table>
            <div>סכום סופי {totalAmount}</div>
            <button id="button9" type="button" className="bg-secondary" >שלם עכשיו</button>
        
        </>
    )
}