

// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"

// export default function GoToPayment(){
//     useEffect(() =>
//     {
//         alert("Are you sure you want to pass for paying ");
//     }
//     )
//     const [TotalPayment ,setTotalPayment]=useState(0);
//     const [total,setTotal] = useState(0);
//     const calc=(price,amount) =>{
//         debugger
//         var a=price*amount
//         setTotal(a)
//         var c=TotalPayment+a
//         setTotalPayment(c)
//     }
    
//     const cart=useSelector((s)=>s.cart)
//     const sum=0
    
//     return (
        
//         <div className="cartDetails"> 
//         <h1>Cart details</h1>
//         <table class="table">
//         <tr>
//       <th scope="col">Image</th>
//       <th scope="col">Product name</th>
//       <th scope="col">Price</th>
//       <th scope="col">Qty</th>
//       <th scope="col">Total</th>
      
//     </tr>
//             {cart?cart.map((product)=>(
//                 <tr>
                  
//                     <td scope="row"><img src={product.img} style={{width:150}}></img></td>
//                     <td >{product.name}</td>
//                     <td >{product.price}</td>
//                     <td>{product.qty}</td>
                    
                
//                     <td >{product.qtytc*product.price}</td>
                    
//                 </tr>
//                 {sum}+={product.price}
//                 )):<div>cart is null</div>}
//         </table>
//         <p>{TotalPayment}</p>
//         <button >pay now</button>
//         </div>
       
//     )
// }

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const GoToPayment = () => {

    useEffect(() =>
    {
        alert("האם אתה בטוח שתרצה לעבור לתשלום? ");
    }
  )

    const products = useSelector((state) => state.cart)
    const totalAmount = products.reduce((acc, product) => acc + (product.cart * product.price), 0);

    return (
        <div>
            
            <br></br>      <br></br><br></br><br></br><br></br>

            <Table striped bordered hover size="sm" className="tabl">
                <thead style={{backgroundColor:'#C12E5A', color:'white'}}>
                    <tr>
                        <td id="th">image</td>
                        <td>Product</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td><img style={{height:80,width:50}}  src={product.img} alt="Card image cap" class="img" className="payment-img"></img></td>
                            <td>{product.name}</td>
                            <td>{product.cart}</td>
                            <td>{product.price}</td>
                            <td>{product.cart * product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div>Total: {totalAmount}</div>
            <Button variant="dark">Pay Now</Button>
        </div>
    );

};

export default GoToPayment;


